from typing import Optional
from sqlalchemy.orm import Session
from app.repositories.base import CRUDBase
from app.models.domain import Inspection

class CRUDInspection(CRUDBase[Inspection]):
    def get_by_status(self, db: Session, status: str, skip: int = 0, limit: int = 100) -> list[Inspection]:
        return db.query(self.model).filter(self.model.status == status).offset(skip).limit(limit).all()

inspection_repo = CRUDInspection(Inspection)
