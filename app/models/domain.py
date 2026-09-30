import uuid
from datetime import datetime, timezone

from geoalchemy2 import Geometry
from sqlalchemy import JSON, Column, DateTime, Float, ForeignKey, Integer, String, Text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship

from app.db.base_class import Base


class Inspection(Base):
    __tablename__ = "inspections"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    created_at = Column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), index=True
    )
    status = Column(String, index=True, default="pending")
    location = Column(
        Geometry(geometry_type="POINT", srid=4326), nullable=True
    )  # geospatial

    images = relationship("ImageMetadata", back_populates="inspection")
    detections = relationship("Detection", back_populates="inspection")
    context = relationship("ContextualInfo", back_populates="inspection", uselist=False)


class ImageMetadata(Base):
    __tablename__ = "image_metadata"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    inspection_id = Column(UUID(as_uuid=True), ForeignKey("inspections.id"))
    file_path = Column(String, nullable=False)
    original_width = Column(Integer)
    original_height = Column(Integer)
    created_at = Column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc)
    )

    inspection = relationship("Inspection", back_populates="images")


class Detection(Base):
    __tablename__ = "detections"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    inspection_id = Column(UUID(as_uuid=True), ForeignKey("inspections.id"))
    issue_type = Column(String, index=True, nullable=False)
    confidence = Column(Float, nullable=False)
    bounding_box = Column(JSON)  # e.g., {"x1": 0, "y1": 0, "x2": 10, "y2": 10}

    inspection = relationship("Inspection", back_populates="detections")
    severity = relationship("Severity", back_populates="detection", uselist=False)
    priority = relationship(
        "PriorityPrediction", back_populates="detection", uselist=False
    )


class Severity(Base):
    __tablename__ = "severities"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    detection_id = Column(UUID(as_uuid=True), ForeignKey("detections.id"))
    level = Column(String, nullable=False)  # Low, Medium, High
    score = Column(Float)
    features_used = Column(JSON)

    detection = relationship("Detection", back_populates="severity")


class ContextualInfo(Base):
    __tablename__ = "contextual_info"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    inspection_id = Column(UUID(as_uuid=True), ForeignKey("inspections.id"))
    traffic_volume = Column(String)
    road_age = Column(Integer)
    road_condition = Column(String)
    accident_history = Column(String)
    nearby_sensitive_locations = Column(String)
    drainage_condition = Column(String)
    environmental_conditions = Column(String)
    maintenance_history = Column(String)

    inspection = relationship("Inspection", back_populates="context")


class PriorityPrediction(Base):
    __tablename__ = "priority_predictions"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    detection_id = Column(UUID(as_uuid=True), ForeignKey("detections.id"))
    score = Column(Float)
    priority_class = Column(String, index=True)  # Low, Medium, High, Critical
    contributing_factors = Column(JSON)  # From SHAP
    model_version = Column(String)
    created_at = Column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc)
    )

    detection = relationship("Detection", back_populates="priority")
    recommendation = relationship(
        "Recommendation", back_populates="priority_prediction", uselist=False
    )


class Recommendation(Base):
    __tablename__ = "recommendations"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    priority_prediction_id = Column(
        UUID(as_uuid=True), ForeignKey("priority_predictions.id")
    )
    recommendation_text = Column(Text, nullable=False)
    reason = Column(Text)
    created_at = Column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc)
    )

    priority_prediction = relationship(
        "PriorityPrediction", back_populates="recommendation"
    )
    maintenance = relationship(
        "MaintenanceRecord", back_populates="recommendation", uselist=False
    )


class MaintenanceRecord(Base):
    __tablename__ = "maintenance_records"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    recommendation_id = Column(UUID(as_uuid=True), ForeignKey("recommendations.id"))
    status = Column(String, index=True, default="scheduled")
    scheduled_date = Column(DateTime(timezone=True))
    completion_date = Column(DateTime(timezone=True))
    notes = Column(Text)

    recommendation = relationship("Recommendation", back_populates="maintenance")


class IssueCluster(Base):
    __tablename__ = "issue_clusters"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    center = Column(Geometry(geometry_type="POINT", srid=4326))
    issue_count = Column(Integer)
    created_at = Column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc)
    )
    # We can link detections to clusters by adding a cluster_id to Detection,
    # but for simplicity let's define it as a standalone model for now.
