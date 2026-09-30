from app.services.context import ContextualFeatures
from app.services.priority import PriorityPredictionResult, PriorityService


def test_priority_service_prediction():
    service = PriorityService()

    features = ContextualFeatures(
        issue_count=5,
        max_severity_score=0.9,
        total_damage_area=0.25,
        traffic_volume="High",
        road_age_years=20,
        nearby_sensitive_location=True,
    )

    result = service.predict_priority(features)

    assert isinstance(result, PriorityPredictionResult)
    assert result.priority_class in ["Low", "Medium", "High", "Critical"]
    assert 0 <= result.score <= 100
    assert result.model_version == "1.0.0"
    assert "max_severity" in result.contributing_factors
    assert result.confidence is not None


def test_priority_service_with_missing_categoricals():
    service = PriorityService()

    features = ContextualFeatures(
        issue_count=1,
        max_severity_score=0.1,
        total_damage_area=0.01,
        # Missing traffic_volume, etc.
    )

    result = service.predict_priority(features)

    assert isinstance(result, PriorityPredictionResult)
    assert result.priority_class in ["Low", "Medium", "High", "Critical"]
