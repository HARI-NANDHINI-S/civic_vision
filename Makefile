.PHONY: setup test format run docker

setup:
	pip install --upgrade pip
	pip install -r requirements.txt
	pip install black ruff pytest pytest-cov

test:
	pytest --cov=app tests/

format:
	black app/ tests/
	ruff check app/ tests/ --fix

run:
	uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

docker:
	docker-compose up --build
