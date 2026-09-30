from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_update_issue_status_valid():
    response = client.patch(
        "/api/v1/maintenance/1/status",
        json={
            "new_status": "In Progress",
            "action_note": "Team dispatched to location."
        }
    )
    
    assert response.status_code == 200
    data = response.json()
    assert data["issue_id"] == 1
    assert data["new_status"] == "In Progress"
    assert data["action_note"] == "Team dispatched to location."

def test_update_issue_status_invalid():
    response = client.patch(
        "/api/v1/maintenance/1/status",
        json={
            "new_status": "Magic State",
            "action_note": "Trying invalid state."
        }
    )
    
    assert response.status_code == 400
    assert "Invalid status" in response.json()["detail"]
