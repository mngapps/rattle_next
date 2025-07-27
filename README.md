# RattleNext

This repository contains a minimal backbone for a scalable web application using Next.js for the frontend and FastAPI for the backend. The frontend comes with a responsive template architecture including sample `index` and `login` pages.

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS, shadcn/ui (via Tailwind components), React Hook Form, Zod
- **Backend**: FastAPI, SQLAlchemy 2.0, Celery + Redis, Auth0 (integration placeholder)
- **Database**: PostgreSQL

## Structure

- `frontend/` - Next.js application
- `backend/` - FastAPI application and Celery worker

## Getting Started

### Backend

```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
./start.sh
```

To start the Celery worker:

```bash
./celery_start.sh
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

This will start the Next.js development server on port 3000.
