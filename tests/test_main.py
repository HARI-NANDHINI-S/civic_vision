from fastapi.testclient import TestClient

from app.core.config import settings
from app.main import app

client = TestClient(app)


def test_health_check():
    response = client.get(f"{settings.API_V1_STR}/health/")
    assert response.status_code == 200
    assert response.json() == {
        "status": "healthy",
        "project": settings.PROJECT_NAME,
        "version": settings.VERSION,
    }


def test_openapi_loads():
    response = client.get(f"{settings.API_V1_STR}/openapi.json")
    assert response.status_code == 200
    assert "openapi" in response.json()


def test_invalid_request():
    response = client.post(f"{settings.API_V1_STR}/health/", json={"wrong": "data"})
    assert response.status_code == 405  # Method Not Allowed
