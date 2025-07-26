from fastapi import FastAPI

from .routers import router as api_router

app = FastAPI(title="RattleNext API")

app.include_router(api_router)

