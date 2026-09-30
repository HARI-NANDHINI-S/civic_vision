from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "CivicVision AI"
    API_V1_STR: str = "/api/v1"
    VERSION: str = "1.0.0"
    CORS_ORIGINS: list[str] = ["http://localhost:3000", "http://localhost:5173"]
    DATABASE_URL: str = "postgresql+psycopg2://user:password@localhost:5432/civicvision"

    class Config:
        case_sensitive = True
        env_file = ".env"

settings = Settings()
