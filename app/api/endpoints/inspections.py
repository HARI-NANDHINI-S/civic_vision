import os
import tempfile
import json
from fastapi import APIRouter, UploadFile, File, Form, HTTPException, Depends
from typing import Dict, Any, Optional

from app.ml.detection.detector import YoloStubDetector
from app.services.inspection import InspectionWorkflowService

router = APIRouter()

# Setup detector (In real app, this would be dependency injected or globally initialized)
detector = YoloStubDetector()
detector.load_model()
inspection_service = InspectionWorkflowService(detector=detector)

@router.post("/")
async def create_inspection(
    file: UploadFile = File(...),
    context: Optional[str] = Form(None)
):
    """
    Process a new civic inspection image.
    context: Optional JSON string containing contextual data (e.g. traffic_volume)
    """
    if not file.filename:
        raise HTTPException(status_code=400, detail="No file uploaded")
        
    context_data = {}
    if context:
        try:
            context_data = json.loads(context)
        except json.JSONDecodeError:
            raise HTTPException(status_code=400, detail="Invalid JSON context")
            
    # Save uploaded file to temp path
    fd, path = tempfile.mkstemp(suffix=os.path.splitext(file.filename)[1])
    os.close(fd)
    
    try:
        content = await file.read()
        with open(path, "wb") as f:
            f.write(content)
            
        # Run workflow (no DB persistence in this phase yet)
        result = inspection_service.process_inspection(path, provided_context=context_data)
        
        return result.model_dump()
        
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if os.path.exists(path):
            os.remove(path)

@router.get("/{inspection_id}")
async def get_inspection(inspection_id: int):
    """
    Get inspection details (Stubbed for now, as DB persistence is next)
    """
    return {"message": "Not implemented yet - awaiting DB integration in subsequent phases", "id": inspection_id}
