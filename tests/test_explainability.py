import pytest
import joblib
import pandas as pd
import os
from app.ml.priority.explainability import SHAPExplainerService, SHAPExplanationResult

@pytest.fixture
def loaded_model_and_features():
    artifacts_dir = os.path.join(os.path.dirname(__file__), "..", "app", "ml", "priority", "artifacts")
    model_path = os.path.join(artifacts_dir, "priority_model.joblib")
    if not os.path.exists(model_path):
        pytest.skip("Model artifact not found. Run training first.")
        
    model = joblib.load(model_path)
    
    # In a real scenario, we'd extract the actual OHE feature names.
    # For testing, we mock the feature list.
    features = [
        "issue_count", "max_severity_score", "total_damage_area", "road_age_years",
        "traffic_volume_Low", "traffic_volume_Medium", "traffic_volume_High",
        "nearby_sensitive_location_False", "nearby_sensitive_location_True"
    ]
    return model, features

def test_shap_explanation(loaded_model_and_features):
    model, features = loaded_model_and_features
    
    explainer = SHAPExplainerService(model, features)
    
    # Predict on dummy
    test_df = pd.DataFrame([{
        "issue_count": 5,
        "max_severity_score": 0.8,
        "total_damage_area": 0.1,
        "traffic_volume": "High",
        "road_age_years": 10,
        "nearby_sensitive_location": True
    }])
    
    # Mocking prediction for testing explainer extraction
    predicted_class_idx = int(model.predict(test_df)[0])
    
    result = explainer.explain(test_df, predicted_class_idx)
    
    assert isinstance(result, SHAPExplanationResult)
    if explainer.explainer:
        assert "SHAP" in result.explanation_metadata
        # Check factors if any contributions met the 0.01 threshold
        for f in result.top_factors:
            assert f.direction in ["increased", "decreased"]
            assert f.human_readable_text != ""
