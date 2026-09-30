import pytest
from fastapi.testclient import TestClient
import numpy as np
import cv2
from app.main import app

client = TestClient(app)

def test_create_inspection_endpoint():
    # Create dummy image bytes
    dummy_img = np.zeros((100, 100, 3), dtype=np.uint8)
    cv2.rectangle(dummy_img, (10, 10), (50, 50), (255, 255, 255), -1)
    
    success, buffer = cv2.imencode('.jpg', dummy_img)
    img_bytes = buffer.tobytes()
    
    # Multipart form data
    response = client.post(
        "/api/v1/inspections/",
        files={"file": ("test.jpg", img_bytes, "image/jpeg")},
        data={"context": '{"traffic_volume": "High"}'}
    )
    
    assert response.status_code == 200
    data = response.json()
    
    assert "priority" in data
    assert "recommendation" in data
    assert "detections" in data
    assert "contextual_features" in data
    
    assert data["contextual_features"]["traffic_volume"] == "High"

def test_get_inspection_stub():
    response = client.get("/api/v1/inspections/1")
    assert response.status_code == 200
    assert response.json()["id"] == 1

def test_create_inspection_too_large():
    # 11 MB dummy bytes
    large_bytes = b"0" * (11 * 1024 * 1024)
    
    response = client.post(
        "/api/v1/inspections/",
        files={"file": ("large.jpg", large_bytes, "image/jpeg")}
    )
    
    assert response.status_code == 413
    assert "File too large" in response.json()["detail"]
