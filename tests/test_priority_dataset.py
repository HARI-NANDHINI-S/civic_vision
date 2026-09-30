import pandas as pd

from app.ml.priority.generate_dataset import generate_synthetic_dataset


def test_generate_synthetic_dataset():
    df = generate_synthetic_dataset(num_samples=100)

    assert isinstance(df, pd.DataFrame)
    assert len(df) == 100

    # Check features exist
    expected_columns = [
        "issue_count",
        "max_severity_score",
        "total_damage_area",
        "traffic_volume",
        "road_age_years",
        "nearby_sensitive_location",
        "priority_class",
    ]
    for col in expected_columns:
        assert col in df.columns

    # Check classes
    valid_classes = {"Low", "Medium", "High", "Critical"}
    unique_classes = set(df["priority_class"].unique())
    assert unique_classes.issubset(valid_classes)

    # Verify reproducible seed
    df2 = generate_synthetic_dataset(num_samples=10, random_seed=42)
    df3 = generate_synthetic_dataset(num_samples=10, random_seed=42)
    pd.testing.assert_frame_equal(df2, df3)
