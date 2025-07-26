# RattleNext Backend

This directory contains the FastAPI backend application with Celery tasks.

## Running the API

```
uvicorn app.main:app --reload
```

## Running Celery Worker

```
celery -A app.celery_worker.celery_app worker --loglevel=INFO
```
