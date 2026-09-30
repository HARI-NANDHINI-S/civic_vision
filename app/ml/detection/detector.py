from typing import List, Dict, Any
from pydantic import BaseModel
import time
import numpy as np
import logging

logger = logging.getLogger(__name__)

class DetectionResult(BaseModel):
    issue_type: str
    class_id: int
    confidence: float
    bounding_box: Dict[str, float]  # {"x1": x, "y1": y, "x2": x, "y2": y}

class InferenceMetadata(BaseModel):
    inference_time_ms: float
    model_version: str
    model_type: str
    image_width: int
    image_height: int

class DetectionResponse(BaseModel):
    detections: List[DetectionResult]
    metadata: InferenceMetadata

class BaseDetector:
    """Abstract interface for object detection models."""
    def load_model(self) -> None:
        raise NotImplementedError

    def predict(self, image: np.ndarray, confidence_threshold: float = 0.5) -> DetectionResponse:
        raise NotImplementedError

class YoloStubDetector(BaseDetector):
    """
    Development stub for YOLO detector. 
    EXPLICITLY MARKED AS STUB. NOT FOR PRODUCTION.
    """
    def __init__(self, model_path: str = "dummy_path", version: str = "stub-1.0"):
        self.model_path = model_path
        self.version = version
        self.is_loaded = False
        self.classes = {0: "Pothole", 1: "Longitudinal Crack", 2: "Waste"}

    def load_model(self) -> None:
        logger.warning("Loading STUB YOLO detector. This is not a real model.")
        self.is_loaded = True

    def predict(self, image: np.ndarray, confidence_threshold: float = 0.5) -> DetectionResponse:
        if not self.is_loaded:
            raise RuntimeError("Model must be loaded before prediction.")
            
        start_time = time.time()
        
        # Determine fake output based on image dimensions for testing predictability
        h, w = image.shape[:2]
        
        detections = []
        # Create one fake detection if confidence_threshold is reasonable
        if confidence_threshold < 0.9:
            detections.append(
                DetectionResult(
                    issue_type=self.classes[0],
                    class_id=0,
                    confidence=0.85,
                    bounding_box={"x1": w * 0.1, "y1": h * 0.1, "x2": w * 0.3, "y2": h * 0.3}
                )
            )

        inference_time = (time.time() - start_time) * 1000
        
        metadata = InferenceMetadata(
            inference_time_ms=inference_time,
            model_version=self.version,
            model_type="yolo-stub",
            image_width=w,
            image_height=h
        )
        
        return DetectionResponse(detections=detections, metadata=metadata)
