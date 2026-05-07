# WagyuPrimeUAE

Premium Wagyu steak e-commerce catalogue for the UAE market.

## Tech Stack

- **Frontend**: React 19 + Tailwind CSS 3 + Shadcn UI (via CRA + CRACO)
- **Backend**: FastAPI + MongoDB (Motor async driver)
- **Fonts**: Playfair Display · Montserrat · Lato

## Getting Started

### Frontend

```bash
cd frontend
yarn install
yarn start
```

Create a `.env` file in `frontend/`:
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

### Backend

```bash
cd backend
pip install -r requirements.txt
```

Create a `.env` file in `backend/`:
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=wagyuprimeuae
CORS_ORIGINS=http://localhost:3000
```

Run the server:
```bash
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

## Features

- 🥩 Curated Wagyu catalogue (Japanese A5, Australian, American)
- 🦞 Premium seafood selection
- 📦 Curated bundle boxes
- 📝 Blog / Journal section
- 📬 Contact form & newsletter signup
- 💬 WhatsApp-first ordering (no cart — contact to order)
- 📱 Fully responsive, mobile-first design
- ✨ Luxury dark theme with gold accents

## Delivery Coverage

Dubai · Abu Dhabi · Sharjah · Ajman · RAK · Fujairah · UAQ
