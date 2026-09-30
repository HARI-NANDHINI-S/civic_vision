from app.services.dashboard import DashboardService, DashboardMetrics

def test_compute_metrics():
    service = DashboardService()
    
    priorities = ["High", "Critical", "Critical", "Low", "Medium", "High"]
    
    metrics = service.compute_metrics(
        active_issues_priorities=priorities,
        active_clusters_count=2,
        historical_resolution_days=[2.0, 4.0, 3.0]
    )
    
    assert isinstance(metrics, DashboardMetrics)
    assert metrics.total_issues == 6
    assert metrics.issues_by_priority["Critical"] == 2
    assert metrics.issues_by_priority["High"] == 2
    assert metrics.critical_active_clusters == 2
    assert metrics.average_resolution_time_days == 3.0
    
    # 2*5000 + 2*1500 + 1*500 + 1*100 = 10000 + 3000 + 500 + 100 = 13600
    assert metrics.estimated_repair_costs == 13600.0

def test_compute_metrics_empty():
    service = DashboardService()
    
    metrics = service.compute_metrics([])
    assert metrics.total_issues == 0
    assert metrics.estimated_repair_costs == 0.0
    assert metrics.average_resolution_time_days == 0.0
