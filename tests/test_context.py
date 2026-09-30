from app.ml.detection.detector import DetectionResult
from app.ml.severity.estimator import SeverityAssessment
from app.services.context import ContextualFeatures, build_contextual_features


def test_build_contextual_features_empty():
    features = build_contextual_features([], [], 1000, 1000)
    assert isinstance(features, ContextualFeatures)
    assert features.issue_count == 0
    assert features.max_severity_score == 0.0
    assert features.total_damage_area == 0.0

    # Ensure missing context is None, not 0
    assert features.traffic_volume is None
    assert features.road_age_years is None
    assert features.nearby_sensitive_location is None


def test_build_contextual_features_with_detections_and_context():
    d1 = DetectionResult(
        issue_type="Crack",
        class_id=1,
        confidence=0.8,
        bounding_box={"x1": 0, "y1": 0, "x2": 100, "y2": 100},
    )  # area 10,000
    s1 = SeverityAssessment(
        level="High",
        score=0.85,
        features_used={},
        method="test",
        version="1",
        confidence=0.9,
    )

    context_data = {
        "traffic_volume": "High",
        "nearby_sensitive_location": True,
        "road_age_years": 15,
    }

    features = build_contextual_features(
        [d1], [s1], 1000, 1000, provided_context=context_data
    )

    assert features.issue_count == 1
    assert features.max_severity_score == 0.85
    assert features.total_damage_area == 0.01  # 10k / 1M

    assert features.traffic_volume == "High"
    assert features.nearby_sensitive_location is True
    assert features.road_age_years == 15
    assert features.drainage_condition is None  # Not provided
