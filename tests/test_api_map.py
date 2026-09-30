from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_get_map_geojson():
    response = client.get("/api/v1/map/geojson")
    assert response.status_code == 200

    data = response.json()
    assert data["type"] == "FeatureCollection"
    assert "features" in data
    assert len(data["features"]) > 0

    feature = data["features"][0]
    assert feature["type"] == "Feature"
    assert "Point" == feature["geometry"]["type"]
    assert len(feature["geometry"]["coordinates"]) == 2

    props = feature["properties"]
    assert "issue_type" in props
    assert "priority" in props
    assert "severity" in props
