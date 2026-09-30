
import pandas as pd
import shap
from pydantic import BaseModel


class FeatureExplanation(BaseModel):
    feature_name: str
    contribution: float
    direction: str  # "increased" or "decreased"
    human_readable_text: str


class SHAPExplanationResult(BaseModel):
    top_factors: list[FeatureExplanation]
    base_value: float
    explanation_metadata: str


class SHAPExplainerService:
    def __init__(self, model_pipeline, feature_names: list[str]):
        """
        Initialize the explainer service.
        model_pipeline: A trained scikit-learn Pipeline.
        feature_names: List of all final feature names (after one-hot encoding).
        """
        self.pipeline = model_pipeline
        self.feature_names = feature_names

        # We need the actual classifier for TreeExplainer
        self.classifier = self.pipeline.named_steps.get("classifier")

        if self.classifier and hasattr(self.classifier, "estimators_"):
            # Use TreeExplainer for Random Forest
            self.explainer = shap.TreeExplainer(self.classifier)
        else:
            # Fallback or stub if incompatible
            self.explainer = None

    def explain(
        self, input_df: pd.DataFrame, predicted_class_idx: int
    ) -> SHAPExplanationResult:
        if not self.explainer:
            return SHAPExplanationResult(
                top_factors=[],
                base_value=0.0,
                explanation_metadata="SHAP not fully supported for this model type. Using basic heuristics.",
            )

        # Preprocess the input
        preprocessor = self.pipeline.named_steps["preprocessor"]
        X_transformed = preprocessor.transform(input_df)

        # Get SHAP values
        shap_values = self.explainer.shap_values(X_transformed)

        # shap_values is a list of arrays for multiclass
        # Get the values for the predicted class
        class_shap_values = shap_values[predicted_class_idx][0]

        # Create explanations
        factors = []
        for i, val in enumerate(class_shap_values):
            if abs(val) > 0.01:  # Filter out very small contributions
                feat_name = (
                    self.feature_names[i]
                    if i < len(self.feature_names)
                    else f"feature_{i}"
                )
                direction = "increased" if val > 0 else "decreased"

                # Human readable text
                if "traffic_volume" in feat_name:
                    text = f"Traffic volume {direction} priority contribution."
                elif "sensitive_location" in feat_name:
                    text = (
                        f"Nearby sensitive location {direction} priority contribution."
                    )
                elif "severity" in feat_name:
                    text = f"Severity score {direction} priority contribution."
                elif "area" in feat_name:
                    text = f"Damage area size {direction} priority contribution."
                elif "issue_count" in feat_name:
                    text = f"Number of issues {direction} priority contribution."
                else:
                    text = f"{feat_name} {direction} priority contribution."

                factors.append(
                    FeatureExplanation(
                        feature_name=feat_name,
                        contribution=float(abs(val)),
                        direction=direction,
                        human_readable_text=text,
                    )
                )

        # Sort by contribution magnitude
        factors.sort(key=lambda x: x.contribution, reverse=True)

        # Base value (expected value) for the predicted class
        expected_value = self.explainer.expected_value[predicted_class_idx]

        return SHAPExplanationResult(
            top_factors=factors[:3],  # Return top 3
            base_value=float(expected_value),
            explanation_metadata="SHAP TreeExplainer v1.0",
        )
