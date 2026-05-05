from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="WagyuPrimeUAE API")
api_router = APIRouter(prefix="/api")


# ======== Models ========
class ContactSubmission(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    subject: Optional[str] = None
    message: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    subject: Optional[str] = None
    message: str


class NewsletterSubscriber(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class NewsletterCreate(BaseModel):
    email: EmailStr


# ======== Routes ========
@api_router.get("/")
async def root():
    return {"message": "WagyuPrimeUAE API", "status": "ok"}


@api_router.post("/contact", response_model=ContactSubmission)
async def create_contact(payload: ContactCreate):
    doc = ContactSubmission(**payload.model_dump()).model_dump()
    await db.contact_submissions.insert_one(doc)
    return ContactSubmission(**doc)


@api_router.get("/contact", response_model=List[ContactSubmission])
async def list_contacts():
    items = await db.contact_submissions.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return items


@api_router.post("/newsletter", response_model=NewsletterSubscriber)
async def subscribe_newsletter(payload: NewsletterCreate):
    existing = await db.newsletter_subscribers.find_one({"email": payload.email}, {"_id": 0})
    if existing:
        return NewsletterSubscriber(**existing)
    doc = NewsletterSubscriber(email=payload.email).model_dump()
    await db.newsletter_subscribers.insert_one(doc)
    return NewsletterSubscriber(**doc)


@api_router.get("/newsletter", response_model=List[NewsletterSubscriber])
async def list_newsletter():
    items = await db.newsletter_subscribers.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return items


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
