import json
import os
from typing import Any

import joblib
import pandas as pd
from pydantic import BaseModel

from app.services.context import ContextualFeatures


class PriorityPredictionResult(BaseModel):
    score: float  # 0-100 scale
    priority_class: str
    model_version: str
    contributing_factors: dict[str, Any]
    confidence: float | None = None


class PriorityService:
    def __init__(self):
        artifacts_dir = os.path.join(
            os.path.dirname(__file__), "..", "ml", "priority", "artifacts"
        )
        self.model_path = os.path.join(artifacts_dir, "priority_model.joblib")
        self.metadata_path = os.path.join(artifacts_dir, "metadata.json")

        self.model = None
        self.metadata = None

        self.load_artifacts()

    def load_artifacts(self):
        if os.path.exists(self.model_path) and os.path.exists(self.metadata_path):
            self.model = joblib.load(self.model_path)
            with open(self.metadata_path, "r") as f:
                self.metadata = json.load(f)
        else:
            raise RuntimeError(
                "Priority model artifacts not found. Please train the model first."
            )

    def predict_priority(
        self, features: ContextualFeatures
    ) -> PriorityPredictionResult:
        """
        Predict priority class and score given contextual features.
        """
        if not self.model or not self.metadata:
            raise RuntimeError("Model is not loaded.")

        # Convert ContextualFeatures to DataFrame
        feature_dict = features.model_dump()

        # Ensure all expected columns are present, fill with defaults if missing
        expected_numeric = self.metadata["feature_schema"]["numeric"]
        expected_categorical = self.metadata["feature_schema"]["categorical"]

        for col in expected_categorical:
            if feature_dict.get(col) is None:
                # Default categoricals if None, though pipeline handles it with 'most_frequent'
                feature_dict[col] = "Medium" if col == "traffic_volume" else False

        df = pd.DataFrame([feature_dict])

        # We only pass the required features
        df_model = df[expected_numeric + expected_categorical]

        # Predict class
        pred_encoded = self.model.predict(df_model)[0]

        # Probabilities
        if hasattr(self.model, "predict_proba"):
            probs = self.model.predict_proba(df_model)[0]
            confidence = float(max(probs))
        else:
            confidence = 1.0

        # Map class
        class_mapping = self.metadata["class_mapping"]
        priority_class = class_mapping.get(str(pred_encoded), "Medium")

        # Derive a 0-100 score based on class and confidence
        base_scores = {"Low": 25, "Medium": 50, "High": 75, "Critical": 95}
        base = base_scores.get(priority_class, 50)
        # Add a slight modifier based on confidence (e.g. if very confident in critical, push to 100)
        modifier = (confidence - 0.5) * 10
        score = min(max(base + modifier, 0.0), 100.0)

        # Contributing factors will be expanded with SHAP in Phase 11
        # For now, return the raw features used
        contributing_factors = {
            "max_severity": features.max_severity_score,
            "issue_count": features.issue_count,
            "traffic_volume": feature_dict.get("traffic_volume"),
        }

        return PriorityPredictionResult(
            score=round(score, 2),
            priority_class=priority_class,
            model_version=self.metadata["model_version"],
            contributing_factors=contributing_factors,
            confidence=round(confidence, 4),
        )
