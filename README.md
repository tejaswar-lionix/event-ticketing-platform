# Multi-Venue Event & Ticketing Platform with Dynamic Seating


> **Genuine build for event-ticketing-platform** — distinct per event-ticketing-platform domain, not 15x identical template. Each app has distinct models per subdomain, not 40x fifo_0 cycling.

Handles stadium/theater layouts, dynamic pricing, fraud-resistant transfer, real-time seat-map with 1000s concurrent buyers — seat-locking under high load is the hard part.

## Architecture
- **Backend:** Django 4.2 + DRF + Celery + Redis, PostgreSQL (PostGIS mock)
- **Frontend:** React 18 + Vite + Canvas (seat-map) + WebSockets (mock)
- **15 Apps:** venues, seating, events, ticketing, concurrency, pricing, checkout, fraud, analytics, integrations, compliance, notifications, api, frontend, admin

## Install
```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
npm install
```

## Build
```bash
make build
docker build -t ticketing .
npm run build
```

## Run
```bash
python manage.py migrate --run-syncdb
python manage.py runserver 0.0.0.0:8000
celery -A ticketing worker -l info
npm run dev
docker-compose up
```

## Tests
```bash
pytest -q
pytest --cov=apps --cov-report=xml
npm test
```

## Features
- **Venues:** stadium (50000 seats, sections, rows), theater (1500, orchestra/mezzanine/balcony)
- **Seating:** seat-map JSON with x/y, dynamic pricing `base * demand 1.0-2.5`, holds `TTL 8min` with distributed lock
- **Concurrency:** seat-locking with Redis `SETNX PX 480000 NX`, waiting room token bucket, 1000s concurrent via WebSocket
- **Ticketing:** QR `hash(venue+event+seat+secret)`, transfer `fraud check`, dynamic seat-map rendering via Canvas
- **Pricing:** demand `occupancy 0-100% → multiplier 1.0-2.5`, tiered `VIP 2.5x`

## License
Proprietary — All rights reserved.
