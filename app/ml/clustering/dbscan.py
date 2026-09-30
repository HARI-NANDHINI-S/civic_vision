import numpy as np
from sklearn.cluster import DBSCAN
from typing import List, Dict, Any, Tuple
from pydantic import BaseModel

class GeoPoint(BaseModel):
    issue_id: str
    latitude: float
    longitude: float
    priority: str = "Medium"

class ClusterResult(BaseModel):
    cluster_id: int
    member_issue_ids: List[str]
    center_latitude: float
    center_longitude: float
    issue_count: int
    priority_summary: Dict[str, int]

def cluster_issues(
    points: List[GeoPoint], 
    distance_threshold_meters: float = 50.0, 
    min_samples: int = 2
) -> List[ClusterResult]:
    """
    Cluster issues based on spatial proximity using DBSCAN.
    Distance is calculated using Haversine formula internally by converting to radians.
    """
    if not points:
        return []
        
    if len(points) < min_samples:
        # Not enough points to form a cluster based on constraints
        return []

    # Convert coordinates to radians for Haversine metric
    coords = np.radians([[p.latitude, p.longitude] for p in points])
    
    # Earth's radius in meters
    earth_radius_m = 6371000.0
    epsilon_radians = distance_threshold_meters / earth_radius_m
    
    db = DBSCAN(eps=epsilon_radians, min_samples=min_samples, algorithm='ball_tree', metric='haversine')
    db.fit(coords)
    
    labels = db.labels_
    
    # Process results
    clusters = {}
    for idx, label in enumerate(labels):
        if label == -1: # Noise (not in a cluster)
            continue
            
        if label not in clusters:
            clusters[label] = []
        clusters[label].append(points[idx])
        
    results = []
    for cluster_id, cluster_points in clusters.items():
        # Calculate cluster center (simple average for small distances)
        avg_lat = sum(p.latitude for p in cluster_points) / len(cluster_points)
        avg_lon = sum(p.longitude for p in cluster_points) / len(cluster_points)
        
        # Priority summary
        priority_counts = {"Critical": 0, "High": 0, "Medium": 0, "Low": 0}
        for p in cluster_points:
            if p.priority in priority_counts:
                priority_counts[p.priority] += 1
                
        result = ClusterResult(
            cluster_id=int(cluster_id),
            member_issue_ids=[p.issue_id for p in cluster_points],
            center_latitude=avg_lat,
            center_longitude=avg_lon,
            issue_count=len(cluster_points),
            priority_summary=priority_counts
        )
        results.append(result)
        
    return results
