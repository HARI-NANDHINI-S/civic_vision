from app.services.recommendation import RecommendationService, RepairRecommendation


def test_recommendation_single_pothole():
    service = RecommendationService()

    rec = service.generate_recommendation(
        priority_class="High", issue_types=["Pothole"], is_cluster=False
    )

    assert isinstance(rec, RepairRecommendation)
    assert rec.urgency_timeframe == "1 week"
    assert "Cold Mix Asphalt" in rec.required_resources
    assert rec.estimated_complexity == "Medium"
    assert "Clean debris" in rec.action_plan


def test_recommendation_cluster_critical():
    service = RecommendationService()

    rec = service.generate_recommendation(
        priority_class="Critical",
        issue_types=["Crack", "Pothole"],
        is_cluster=True,
        cluster_size=6,
    )

    assert rec.urgency_timeframe == "24-48 hours"
    assert rec.estimated_complexity == "High"
    assert "Batch Repair" in rec.action_plan
    assert "6 issues" in rec.action_plan
    assert "Heavy Machinery" in rec.required_resources
    assert "Traffic Control Team" in rec.required_resources
