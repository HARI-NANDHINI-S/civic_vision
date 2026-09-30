# CivicVision AI Backend

CivicVision AI is an intelligent civic issue management system that automates the detection, severity estimation, spatial clustering, and prioritization of civil infrastructure problems (e.g., potholes, cracks, waste).

## Tech Stack
- **API Framework**: FastAPI
- **Database**: PostgreSQL with PostGIS (via Supabase)
- **ORM**: SQLAlchemy + GeoAlchemy2
- **Machine Learning**: Scikit-Learn (RandomForest), SHAP (Explainability), OpenCV (Preprocessing)
- **Containerization**: Docker & Docker Compose
- **CI/CD**: GitHub Actions

## Features
- End-to-end ML pipeline for image-based detection processing.
- Context-aware severity and priority ML models (Tabular).
- DBSCAN Spatial clustering to group issues by 50m radius.
- Explainable AI (SHAP) exposing exactly *why* a ticket was marked Critical.
- Recommendation Engine auto-generating repair timelines.
- Automated API endpoints.

## Local Setup

### 1. Environment variables
Create a `.env` file in the root directory:
```env
DATABASE_URL=postgresql+psycopg2://user:password@localhost:5432/civicvision
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
```

### 2. Install Dependencies
```bash
python -m venv .venv
source .venv/bin/activate  # or .venv\Scripts\Activate.ps1 on Windows
pip install -r requirements.txt
```

### 3. Run Migrations
```bash
alembic upgrade head
```

### 4. Start the Server
```bash
uvicorn app.main:app --reload
```

## Docker
```bash
docker-compose up --build
```

## Testing & Linting
We use `pytest` for testing, `black` for formatting, and `ruff` for linting.
```bash
make test
make format
```
