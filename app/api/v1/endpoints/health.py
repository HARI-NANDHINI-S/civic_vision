from fastapi import APIRouter
from app.core.config import settings

router = APIRouter()

@router.get("/", status_code=200)
async def health_check():
    return {
        "status": "healthy",
        "project": settings.PROJECT_NAME,
        "version": settings.VERSION
    }
