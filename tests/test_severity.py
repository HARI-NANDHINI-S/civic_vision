import pytest
from app.ml.detection.detector import DetectionResult
from app.ml.severity.estimator import assess_severity, SeverityAssessment

def test_assess_severity_small_pothole():
    detection = DetectionResult(
        issue_type="Pothole",
        class_id=0,
        confidence=0.9,
        bounding_box={"x1": 0, "y1": 0, "x2": 10, "y2": 10} # Area 100
    )
    
    assessment = assess_severity(detection, 1000, 1000)
    
    assert isinstance(assessment, SeverityAssessment)
    assert assessment.level in ["Low", "Medium", "High"]
    assert assessment.method == "heuristic_area_frequency"
    assert "area_ratio" in assessment.features_used
    assert assessment.features_used["same_issue_count"] == 0
    assert assessment.score > 0

def test_assess_severity_large_pothole():
    detection = DetectionResult(
        issue_type="Pothole",
        class_id=0,
        confidence=0.9,
        bounding_box={"x1": 0, "y1": 0, "x2": 500, "y2": 500} # Area 250,000, 25% of image
    )
    
    assessment = assess_severity(detection, 1000, 1000)
    assert assessment.level == "High"
    assert assessment.score >= 0.9

def test_assess_severity_multiple_issues():
    d1 = DetectionResult(issue_type="Crack", class_id=1, confidence=0.8, bounding_box={"x1": 0, "y1": 0, "x2": 10, "y2": 10})
    d2 = DetectionResult(issue_type="Crack", class_id=1, confidence=0.8, bounding_box={"x1": 20, "y1": 20, "x2": 30, "y2": 30})
    d3 = DetectionResult(issue_type="Crack", class_id=1, confidence=0.8, bounding_box={"x1": 40, "y1": 40, "x2": 50, "y2": 50})
    d4 = DetectionResult(issue_type="Crack", class_id=1, confidence=0.8, bounding_box={"x1": 60, "y1": 60, "x2": 70, "y2": 70})
    
    all_detections = [d1, d2, d3, d4]
    
    assessment = assess_severity(d1, 1000, 1000, all_detections)
    
    assert assessment.features_used["same_issue_count"] == 4
    # Score should be higher due to multiple cracks
    single_assessment = assess_severity(d1, 1000, 1000, [d1])
    assert assessment.score > single_assessment.score
