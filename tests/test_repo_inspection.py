from unittest.mock import MagicMock
from app.repositories.inspection import inspection_repo
from app.models.domain import Inspection

def test_inspection_repo_get_by_status():
    mock_session = MagicMock()
    
    # Mocking the SQLAlchemy query chain
    mock_query = mock_session.query.return_value
    mock_filter = mock_query.filter.return_value
    mock_offset = mock_filter.offset.return_value
    mock_limit = mock_offset.limit.return_value
    
    mock_limit.all.return_value = [Inspection(status="pending")]
    
    results = inspection_repo.get_by_status(mock_session, status="pending")
    
    assert len(results) == 1
    assert results[0].status == "pending"
    mock_session.query.assert_called_once_with(Inspection)
