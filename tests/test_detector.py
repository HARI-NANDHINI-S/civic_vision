import numpy as np
import pytest
from app.ml.detection.detector import (
    YoloStubDetector, 
    DetectionResponse, 
    DetectionResult
)

def test_yolo_stub_detector_not_loaded():
    detector = YoloStubDetector()
    dummy_image = np.zeros((640, 640, 3), dtype=np.uint8)
    
    with pytest.raises(RuntimeError, match="Model must be loaded"):
        detector.predict(dummy_image)

def test_yolo_stub_detector_prediction():
    detector = YoloStubDetector()
    detector.load_model()
    
    dummy_image = np.zeros((640, 640, 3), dtype=np.uint8)
    response = detector.predict(dummy_image, confidence_threshold=0.5)
    
    assert isinstance(response, DetectionResponse)
    assert len(response.detections) == 1
    
    detection = response.detections[0]
    assert isinstance(detection, DetectionResult)
    assert detection.issue_type == "Pothole"
    assert detection.confidence == 0.85
    
    # Bounding box logic based on dimensions
    assert detection.bounding_box["x1"] == 64.0
    
    # Metadata
    assert response.metadata.model_type == "yolo-stub"
    assert response.metadata.image_width == 640
    assert response.metadata.image_height == 640

def test_yolo_stub_detector_high_threshold():
    detector = YoloStubDetector()
    detector.load_model()
    
    dummy_image = np.zeros((640, 640, 3), dtype=np.uint8)
    response = detector.predict(dummy_image, confidence_threshold=0.95)
    
    assert len(response.detections) == 0
