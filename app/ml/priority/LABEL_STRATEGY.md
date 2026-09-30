# Priority Label Strategy and Provenance

## Source
This dataset is **SYNTHETIC**. It does not represent real-world ground truth from any government authority. It is generated specifically to bootstrap and evaluate the maintenance priority ML models for the CivicVision AI project.

## Generation Method
Generated programmatically using rule-based heuristics in `app/ml/priority/generate_dataset.py` (Version 1.0.0). It simulates expected correlations between detected civic issues, contextual factors, and maintenance priority.

## Feature Definitions
- `issue_count` (int): Number of detected issues in the frame.
- `max_severity_score` (float): Highest severity score among detections [0.0 - 1.0].
- `total_damage_area` (float): Ratio of bounding box area to total image area.
- `traffic_volume` (str): High, Medium, Low.
- `road_age_years` (int): Age of the road surface.
- `nearby_sensitive_location` (bool): Proximity to schools, hospitals, etc.

## Label Definitions (Target: `priority_class`)
- `Low`: Minor cosmetic issues, low traffic, no sensitive locations.
- `Medium`: Noticeable issues but not immediately dangerous.
- `High`: Severe issues in high traffic areas, or near sensitive locations.
- `Critical`: Maximum severity issues posing immediate danger or severe infrastructure damage.

## Version
Dataset Generator v1.0.0
