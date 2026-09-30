from fastapi import APIRouter
from typing import Dict, Any, List

router = APIRouter()

@router.get("/geojson")
async def get_map_data(bbox: str = None) -> Dict[str, Any]:
    """
    Returns detected issues formatted as a standard GeoJSON FeatureCollection.
    `bbox` query parameter format: min_lon,min_lat,max_lon,max_lat
    (Stubbed with dummy data for now, pending DB integration)
    """
    
    # Mock data for frontend Map integration
    features = [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [77.594562, 12.971598] # [lon, lat]
            },
            "properties": {
                "id": 1,
                "issue_type": "Pothole",
                "priority": "High",
                "severity": 0.85,
                "status": "Pending"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [77.600000, 13.000000]
            },
            "properties": {
                "id": 2,
                "issue_type": "Longitudinal Crack",
                "priority": "Medium",
                "severity": 0.45,
                "status": "In Progress"
            }
        }
    ]
    
    return {
        "type": "FeatureCollection",
        "features": features
    }
