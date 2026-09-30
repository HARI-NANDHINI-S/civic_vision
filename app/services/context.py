from typing import Optional, Dict, Any, List
from pydantic import BaseModel
from app.ml.detection.detector import DetectionResult
from app.ml.severity.estimator import SeverityAssessment

class ContextualFeatures(BaseModel):
    """Normalized schema for contextual features required for priority prediction."""
    issue_count: int
    max_severity_score: float
    total_damage_area: float
    
    # Contextual factors (allow None/missing explicitly)
    traffic_volume: Optional[str] = None # Low, Medium, High
    road_age_years: Optional[int] = None
    road_condition: Optional[str] = None # Good, Fair, Poor
    accident_history: Optional[str] = None # None, Minor, Major
    nearby_sensitive_location: Optional[bool] = None
    drainage_condition: Optional[str] = None # Good, Poor, Waterlogged
    environmental_condition: Optional[str] = None # Dry, Wet, Snow
    maintenance_history: Optional[str] = None # Recent, Overdue, None

def build_contextual_features(
    detections: List[DetectionResult],
    severities: List[SeverityAssessment],
    image_width: int,
    image_height: int,
    provided_context: Optional[Dict[str, Any]] = None
) -> ContextualFeatures:
    """
    Build structured feature layer combining detection logic and provided context.
    Missing contextual values remain None rather than being incorrectly zeroed.
    """
    provided_context = provided_context or {}
    
    # Calculate detection-derived features
    issue_count = len(detections)
    max_severity = max([s.score for s in severities]) if severities else 0.0
    
    total_damage_area = 0.0
    image_area = image_width * image_height
    if image_area > 0:
        for d in detections:
            box = d.bounding_box
            area = (box["x2"] - box["x1"]) * (box["y2"] - box["y1"])
            total_damage_area += (area / image_area)
    
    return ContextualFeatures(
        issue_count=issue_count,
        max_severity_score=max_severity,
        total_damage_area=min(total_damage_area, 1.0), # cap at 100%
        
        # Populate contextual factors from provided map (or database lookup later)
        traffic_volume=provided_context.get("traffic_volume"),
        road_age_years=provided_context.get("road_age_years"),
        road_condition=provided_context.get("road_condition"),
        accident_history=provided_context.get("accident_history"),
        nearby_sensitive_location=provided_context.get("nearby_sensitive_location"),
        drainage_condition=provided_context.get("drainage_condition"),
        environmental_condition=provided_context.get("environmental_condition"),
        maintenance_history=provided_context.get("maintenance_history")
    )
