from pydantic import BaseModel


class DashboardMetrics(BaseModel):
    total_issues: int
    issues_by_priority: dict[str, int]
    critical_active_clusters: int
    average_resolution_time_days: float
    estimated_repair_costs: float


class DashboardService:
    def __init__(self):
        # Base cost estimations by priority
        self.cost_estimation_map = {
            "Low": 100.0,
            "Medium": 500.0,
            "High": 1500.0,
            "Critical": 5000.0,
        }

    def compute_metrics(
        self,
        active_issues_priorities: list[str],
        active_clusters_count: int = 0,
        historical_resolution_days: list[float] = None,
    ) -> DashboardMetrics:
        """
        Compute system-wide dashboard metrics from current data.
        In future phases, this will directly query the SQLAlchemy models.
        """
        historical_resolution_days = historical_resolution_days or [0.0]

        priority_counts = {"Critical": 0, "High": 0, "Medium": 0, "Low": 0}
        total_cost = 0.0

        for priority in active_issues_priorities:
            # Safely handle unexpected labels
            p = priority if priority in priority_counts else "Medium"
            priority_counts[p] += 1
            total_cost += self.cost_estimation_map[p]

        avg_resolution = 0.0
        if historical_resolution_days:
            avg_resolution = sum(historical_resolution_days) / len(
                historical_resolution_days
            )

        return DashboardMetrics(
            total_issues=len(active_issues_priorities),
            issues_by_priority=priority_counts,
            critical_active_clusters=active_clusters_count,
            average_resolution_time_days=round(avg_resolution, 1),
            estimated_repair_costs=round(total_cost, 2),
        )
