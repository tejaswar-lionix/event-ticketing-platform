build:
	docker build -t ticketing .

test:
	pytest -q

run:
	python manage.py runserver 0.0.0.0:8000
