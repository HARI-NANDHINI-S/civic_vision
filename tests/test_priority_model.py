import os

import joblib
import pandas as pd

from app.ml.priority.training import train_and_evaluate


def test_priority_model_training():
    # Run a small training loop to ensure it doesn't crash and creates artifacts
    metadata = train_and_evaluate()

    artifacts_dir = os.path.join(
        os.path.dirname(__file__), "..", "app", "ml", "priority", "artifacts"
    )

    # Check artifacts exist
    assert os.path.exists(os.path.join(artifacts_dir, "priority_model.joblib"))
    assert os.path.exists(os.path.join(artifacts_dir, "metadata.json"))

    # Check metadata structure
    assert metadata["selected_model"] == "RandomForest"
    assert "class_mapping" in metadata
    assert "evaluation_metrics" in metadata
    assert "RandomForest" in metadata["evaluation_metrics"]

    # Test model prediction works
    model = joblib.load(os.path.join(artifacts_dir, "priority_model.joblib"))
    test_df = pd.DataFrame(
        [
            {
                "issue_count": 5,
                "max_severity_score": 0.8,
                "total_damage_area": 0.1,
                "traffic_volume": "High",
                "road_age_years": 10,
                "nearby_sensitive_location": True,
            }
        ]
    )

    pred = model.predict(test_df)
    assert len(pred) == 1

    # Map back to string
    class_id = str(pred[0])
    assert metadata["class_mapping"][class_id] in ["Low", "Medium", "High", "Critical"]
