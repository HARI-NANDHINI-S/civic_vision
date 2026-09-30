import json
from typing import Dict, Any, List, Optional
from pydantic import BaseModel

from app.ml.detection.preprocessing import preprocess_image
from app.ml.detection.detector import BaseDetector, DetectionResponse
from app.ml.severity.estimator import assess_severity, SeverityAssessment
from app.services.context import build_contextual_features, ContextualFeatures
from app.services.priority import PriorityService, PriorityPredictionResult
from app.services.recommendation import RecommendationService, RepairRecommendation

class InspectionWorkflowResult(BaseModel):
    image_metadata: Dict[str, Any]
    detections: List[Dict[str, Any]]
    contextual_features: ContextualFeatures
    priority: PriorityPredictionResult
    recommendation: RepairRecommendation

class InspectionWorkflowService:
    def __init__(self, detector: BaseDetector):
        self.detector = detector
        self.priority_service = PriorityService()
        self.recommendation_service = RecommendationService()

    def process_inspection(
        self, 
        file_path: str, 
        provided_context: Optional[Dict[str, Any]] = None
    ) -> InspectionWorkflowResult:
        """
        End-to-end processing pipeline for a single inspection image.
        """
        # 1. Preprocess Image
        processed_img, metadata = preprocess_image(file_path)
        img_width = metadata.original_width
        img_height = metadata.original_height
        
        # 2. Detect Issues
        detection_response = self.detector.predict(processed_img)
        
        # 3. Assess Severity per detection
        severities = []
        enriched_detections = []
        for det in detection_response.detections:
            sev = assess_severity(
                detection=det,
                image_width=img_width,
                image_height=img_height,
                all_detections=detection_response.detections
            )
            severities.append(sev)
            
            enriched_detections.append({
                "detection": det.model_dump(),
                "severity": sev.model_dump()
            })
            
        # 4. Build Contextual Features
        context_features = build_contextual_features(
            detections=detection_response.detections,
            severities=severities,
            image_width=img_width,
            image_height=img_height,
            provided_context=provided_context
        )
        
        # 5. Predict Priority
        try:
            priority_result = self.priority_service.predict_priority(context_features)
        except RuntimeError as e:
            # Fallback if model not trained
            priority_result = PriorityPredictionResult(
                score=50.0,
                priority_class="Medium",
                model_version="fallback",
                contributing_factors={"error": str(e)}
            )
            
        # 6. Generate Recommendations
        issue_types = [d.issue_type for d in detection_response.detections]
        recommendation = self.recommendation_service.generate_recommendation(
            priority_class=priority_result.priority_class,
            issue_types=issue_types,
            is_cluster=False, # Clustering happens across multiple inspections
            cluster_size=1
        )
        
        return InspectionWorkflowResult(
            image_metadata=metadata.model_dump(),
            detections=enriched_detections,
            contextual_features=context_features,
            priority=priority_result,
            recommendation=recommendation
        )
