#!/bin/bash
celery -A app.celery_worker.celery_app worker --loglevel=INFO
