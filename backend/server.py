from contextlib import asynccontextmanager
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

# ======== Logging ========
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# ======== Database ========
mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
db_name = os.environ.get('DB_NAME', 'wagyuprimeuae')

client = None
db = None

def get_db():
    global client, db
    if db is None:
        client = AsyncIOMotorClient(mongo_url)
        db = client[db_name]
        logger.info(f"Connected to MongoDB: {db_name}")
    return db


app = FastAPI(
    title="WagyuPrimeUAE API",
    description="Backend API for WagyuPrimeUAE — Premium Wagyu Steaks in the UAE",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

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
    database = get_db()
    doc = ContactSubmission(**payload.model_dump()).model_dump()
    await database.contact_submissions.insert_one(doc)
    return ContactSubmission(**doc)


@api_router.get("/contact", response_model=List[ContactSubmission])
async def list_contacts():
    database = get_db()
    items = await database.contact_submissions.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return items


@api_router.post("/newsletter", response_model=NewsletterSubscriber)
async def subscribe_newsletter(payload: NewsletterCreate):
    database = get_db()
    existing = await database.newsletter_subscribers.find_one({"email": payload.email}, {"_id": 0})
    if existing:
        return NewsletterSubscriber(**existing)
    doc = NewsletterSubscriber(email=payload.email).model_dump()
    await database.newsletter_subscribers.insert_one(doc)
    return NewsletterSubscriber(**doc)


@api_router.get("/newsletter", response_model=List[NewsletterSubscriber])
async def list_newsletter():
    database = get_db()
    items = await database.newsletter_subscribers.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return items


app.include_router(api_router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("server:app", host="0.0.0.0", port=8001, reload=True)
