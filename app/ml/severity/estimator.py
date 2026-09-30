from typing import Any

from pydantic import BaseModel

from app.ml.detection.detector import DetectionResult


class SeverityAssessment(BaseModel):
    level: str  # "Low", "Medium", "High"
    score: float
    features_used: dict[str, Any]
    method: str
    version: str
    confidence: float


def calculate_box_area(box: dict[str, float]) -> float:
    """Calculate area of a bounding box."""
    return (box["x2"] - box["x1"]) * (box["y2"] - box["y1"])


def assess_severity(
    detection: DetectionResult,
    image_width: int,
    image_height: int,
    all_detections: list[DetectionResult] = None,
) -> SeverityAssessment:
    """
    Estimate severity of a specific detection based on visual features.
    """
    all_detections = all_detections or []

    # 1. Bounding box area ratio
    image_area = image_width * image_height
    box_area = calculate_box_area(detection.bounding_box)
    area_ratio = box_area / image_area if image_area > 0 else 0

    # 2. Count of same issue in the image
    same_issue_count = sum(
        1 for d in all_detections if d.issue_type == detection.issue_type
    )

    # Heuristics for scoring
    # Base score on size
    base_score = min(area_ratio * 10, 1.0)  # Assume 10% of image is max severity size

    # Adjust for frequency
    if same_issue_count > 3:
        base_score += 0.2

    # Issue type specific adjustments
    if detection.issue_type.lower() == "pothole":
        base_score += 0.2  # Potholes are inherently more severe

    final_score = min(max(base_score, 0.0), 1.0)

    if final_score >= 0.7:
        level = "High"
    elif final_score >= 0.4:
        level = "Medium"
    else:
        level = "Low"

    features_used = {
        "area_ratio": area_ratio,
        "same_issue_count": same_issue_count,
        "base_confidence": detection.confidence,
    }

    return SeverityAssessment(
        level=level,
        score=final_score,
        features_used=features_used,
        method="heuristic_area_frequency",
        version="1.0.0",
        confidence=0.8,  # Estimated confidence in this heuristic
    )
