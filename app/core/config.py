from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    PROJECT_NAME: str = "CivicVision AI"
    API_V1_STR: str = "/api/v1"
    VERSION: str = "1.0.0"
    CORS_ORIGINS: list[str] = ["http://localhost:3000", "http://localhost:5173"]
    DATABASE_URL: str = "postgresql+psycopg2://user:password@localhost:5432/civicvision"
    
    SUPABASE_URL: str = "https://stub.supabase.co"
    SUPABASE_KEY: str = "stub_key"

    model_config = SettingsConfigDict(
        case_sensitive=True,
        env_file=".env",
        extra="ignore"
    )

settings = Settings()
