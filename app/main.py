from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api.v1.api import api_router
from app.core.exceptions import setup_exception_handlers
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

from app.api.endpoints import inspections, map, maintenance

from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("Starting up CivicVision AI backend...")
    yield

def create_app() -> FastAPI:
    app = FastAPI(
        title=settings.PROJECT_NAME,
        openapi_url=f"{settings.API_V1_STR}/openapi.json",
        version=settings.VERSION,
        lifespan=lifespan,
    )

    # Set all CORS enabled origins
    if settings.CORS_ORIGINS:
        app.add_middleware(
            CORSMiddleware,
            allow_origins=[str(origin) for origin in settings.CORS_ORIGINS],
            allow_credentials=True,
            allow_methods=["*"],
            allow_headers=["*"],
        )

    # Include routers
    app.include_router(api_router, prefix=settings.API_V1_STR)
    app.include_router(inspections.router, prefix=f"{settings.API_V1_STR}/inspections", tags=["inspections"])
    app.include_router(map.router, prefix=f"{settings.API_V1_STR}/map", tags=["map"])
    app.include_router(maintenance.router, prefix=f"{settings.API_V1_STR}/maintenance", tags=["maintenance"])
    
    # Exception handling
    setup_exception_handlers(app)

    return app

app = create_app()
