import numpy as np
import pandas as pd

VERSION = "1.0.0"


def generate_synthetic_dataset(
    num_samples: int = 1000, random_seed: int = 42
) -> pd.DataFrame:
    """
    Generate a SYNTHETIC dataset for priority prediction based on documented heuristics.
    """
    np.random.seed(random_seed)

    # Generate features
    issue_count = np.random.randint(1, 10, num_samples)
    max_severity_score = np.random.uniform(0.1, 1.0, num_samples)
    total_damage_area = np.random.uniform(0.01, 0.4, num_samples)

    traffic_volume = np.random.choice(
        ["Low", "Medium", "High"], num_samples, p=[0.4, 0.4, 0.2]
    )
    road_age_years = np.random.randint(1, 30, num_samples)
    nearby_sensitive = np.random.choice([True, False], num_samples, p=[0.15, 0.85])

    df = pd.DataFrame(
        {
            "issue_count": issue_count,
            "max_severity_score": max_severity_score,
            "total_damage_area": total_damage_area,
            "traffic_volume": traffic_volume,
            "road_age_years": road_age_years,
            "nearby_sensitive_location": nearby_sensitive,
        }
    )

    # Rule-based synthetic label generation
    labels = []
    for _, row in df.iterrows():
        score = 0

        # Base severity score (0 to 10)
        score += row["max_severity_score"] * 10

        # Traffic volume modifier
        if row["traffic_volume"] == "High":
            score += 3
        elif row["traffic_volume"] == "Medium":
            score += 1

        # Sensitive location modifier
        if row["nearby_sensitive_location"]:
            score += 4

        # Damage area
        if row["total_damage_area"] > 0.2:
            score += 2

        # Determine class based on synthetic score
        if score >= 14:
            labels.append("Critical")
        elif score >= 10:
            labels.append("High")
        elif score >= 6:
            labels.append("Medium")
        else:
            labels.append("Low")

    df["priority_class"] = labels
    return df


def save_dataset(df: pd.DataFrame, output_path: str):
    """Save dataset with metadata indicating synthetic nature."""
    df.to_csv(output_path, index=False)
    # Metadata sidecar could be saved here
