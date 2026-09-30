
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()


class StatusUpdateRequest(BaseModel):
    new_status: str
    action_note: str
    assigned_team: str = None


class StatusUpdateResponse(BaseModel):
    issue_id: int
    previous_status: str
    new_status: str
    action_note: str


VALID_STATUSES = {"Pending", "Scheduled", "In Progress", "Resolved", "Blocked"}


@router.patch("/{issue_id}/status", response_model=StatusUpdateResponse)
async def update_issue_status(issue_id: int, request: StatusUpdateRequest):
    """
    Update the maintenance status of a specific issue.
    """
    if request.new_status not in VALID_STATUSES:
        raise HTTPException(
            status_code=400,
            detail=f"Invalid status '{request.new_status}'. Allowed: {VALID_STATUSES}",
        )

    # Stubbed behavior. In DB phases, this will check current status and transition
    previous_status = "Pending"  # Mocked

    return StatusUpdateResponse(
        issue_id=issue_id,
        previous_status=previous_status,
        new_status=request.new_status,
        action_note=request.action_note,
    )
