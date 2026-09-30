from pydantic import BaseModel


class RepairRecommendation(BaseModel):
    action_plan: str
    urgency_timeframe: str  # e.g. "24 hours", "1 week"
    required_resources: list[str]
    estimated_complexity: str  # Low, Medium, High


class RecommendationService:
    def __init__(self):
        # Configuration mapping for recommendations
        self.issue_type_config = {
            "pothole": {
                "resources": ["Cold Mix Asphalt", "Compactor", "Traffic Cones"],
                "action": "Clean debris, apply cold/hot mix asphalt, compact surface.",
            },
            "crack": {
                "resources": ["Sealant", "Heat Lance", "Squeegee"],
                "action": "Clean crack, apply heated sealant, spread evenly.",
            },
            "default": {
                "resources": ["Standard Repair Kit", "Safety Gear"],
                "action": "Assess damage on site and apply standard civil repair procedure.",
            },
        }

        self.urgency_map = {
            "Critical": "24-48 hours",
            "High": "1 week",
            "Medium": "1 month",
            "Low": "Scheduled maintenance (3+ months)",
        }

    def generate_recommendation(
        self,
        priority_class: str,
        issue_types: list[str],
        is_cluster: bool = False,
        cluster_size: int = 1,
    ) -> RepairRecommendation:
        """
        Generate actionable recommendations based on ML predictions.
        """
        # Determine primary issue type (simplification: most common or just first)
        primary_issue = issue_types[0].lower() if issue_types else "default"
        config = self.issue_type_config.get(
            primary_issue, self.issue_type_config["default"]
        )

        # Urgency
        urgency = self.urgency_map.get(priority_class, "1 month")

        # Action plan
        action = config["action"]
        if is_cluster and cluster_size > 1:
            action = f"Batch Repair ({cluster_size} issues in area): {action}"

        # Complexity
        if priority_class == "Critical" or (is_cluster and cluster_size > 5):
            complexity = "High"
        elif priority_class == "High" or (is_cluster and cluster_size > 2):
            complexity = "Medium"
        else:
            complexity = "Low"

        # Adjust resources for clusters
        resources = list(config["resources"])
        if is_cluster and cluster_size > 3:
            resources.append("Heavy Machinery")
            resources.append("Traffic Control Team")

        return RepairRecommendation(
            action_plan=action,
            urgency_timeframe=urgency,
            required_resources=resources,
            estimated_complexity=complexity,
        )
