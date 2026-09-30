from app.ml.clustering.dbscan import ClusterResult, GeoPoint, cluster_issues


def test_dbscan_clustering():
    # 1 degree lat is ~111km.
    # 0.0001 degree is ~11 meters.

    p1 = GeoPoint(
        issue_id="1", latitude=12.971598, longitude=77.594562, priority="High"
    )
    p2 = GeoPoint(
        issue_id="2", latitude=12.971600, longitude=77.594565, priority="Medium"
    )  # Very close to p1
    p3 = GeoPoint(
        issue_id="3", latitude=12.971605, longitude=77.594570, priority="Low"
    )  # Very close to p1, p2

    p4 = GeoPoint(
        issue_id="4", latitude=13.000000, longitude=77.600000, priority="High"
    )  # Far away (Noise)

    points = [p1, p2, p3, p4]

    # 50 meters threshold
    clusters = cluster_issues(points, distance_threshold_meters=50.0, min_samples=2)

    assert len(clusters) == 1

    c = clusters[0]
    assert isinstance(c, ClusterResult)
    assert c.issue_count == 3
    assert "1" in c.member_issue_ids
    assert "2" in c.member_issue_ids
    assert "3" in c.member_issue_ids
    assert "4" not in c.member_issue_ids

    assert c.priority_summary["High"] == 1
    assert c.priority_summary["Medium"] == 1
    assert c.priority_summary["Low"] == 1
    assert c.priority_summary["Critical"] == 0


def test_dbscan_clustering_no_clusters():
    p1 = GeoPoint(issue_id="1", latitude=12.971598, longitude=77.594562)
    p2 = GeoPoint(issue_id="4", latitude=13.000000, longitude=77.600000)

    # Too far apart
    clusters = cluster_issues([p1, p2], distance_threshold_meters=50.0, min_samples=2)
    assert len(clusters) == 0
