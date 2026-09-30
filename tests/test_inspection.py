import pytest
import numpy as np
import cv2
from app.services.inspection import InspectionWorkflowService, InspectionWorkflowResult
from app.ml.detection.detector import YoloStubDetector

def test_complete_inspection_workflow():
    # Create dummy image bytes
    dummy_img = np.zeros((100, 100, 3), dtype=np.uint8)
    # Add a white box simulating an issue
    cv2.rectangle(dummy_img, (10, 10), (50, 50), (255, 255, 255), -1)
    
    import tempfile
    import os
    
    fd, path = tempfile.mkstemp(suffix=".jpg")
    os.close(fd)
    
    try:
        cv2.imwrite(path, dummy_img)
        
        detector = YoloStubDetector(model_path="stub_path")
        detector.load_model()
    
        service = InspectionWorkflowService(detector=detector)
        
        context = {
            "traffic_volume": "High",
            "road_age_years": 10
        }
        
        result = service.process_inspection(path, provided_context=context)
        
        assert isinstance(result, InspectionWorkflowResult)
        assert result.contextual_features.traffic_volume == "High"
        
        # Priority uses ML model from phase 9/10
        assert result.priority.priority_class in ["Low", "Medium", "High", "Critical"]
        
        # Recommendations should be populated
        assert result.recommendation.estimated_complexity in ["Low", "Medium", "High"]
        assert len(result.detections) >= 1
    finally:
        if os.path.exists(path):
            os.remove(path)
