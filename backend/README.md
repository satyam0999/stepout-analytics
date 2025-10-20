# StepOut Analytics Backend

Django REST API backend for the StepOut Analytics football player dashboard.

## Features

- JSON-based data storage (no database required)
- Mock authentication system
- Complete player statistics and analytics
- CORS enabled for React frontend
- RESTful API endpoints

## Tech Stack

- Django 4.2.7
- Django REST Framework 3.14.0
- Django CORS Headers 4.3.0

## Setup Instructions

### 1. Create Virtual Environment

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Run Server

```bash
python manage.py runserver
```

The server will start at `http://127.0.0.1:8000/`

## API Endpoints

### Authentication

**POST** `/api/login/`

Request:
```json
{
  "email": "player1@stepout.com",
  "password": "stepout123"
}
```

Response:
```json
{
  "user": {
    "id": 1,
    "name": "Marcus Silva",
    "email": "player1@stepout.com",
    "playerId": 1
  },
  "token": "mock-token-1",
  "playerId": 1
}
```

### Player Data

**GET** `/api/players/{player_id}/report/`

Response: Complete player data (see data structure below)

## Test Credentials

| Player | Email | Password |
|--------|-------|----------|
| Player 1 | player1@stepout.com | stepout123 |
| Player 2 | player2@stepout.com | stepout123 |
| Player 3 | player3@stepout.com | stepout123 |

## Data Structure

Each player has:
- Basic info (name, position, game time)
- Circle stats (passing, dribbling, shooting, defending, physical)
- Summary statistics
- Match history
- Overall activity (heatmaps and vectors)
- Detailed stats (passing, defending, shooting)
- Attribute summary

## Frontend Integration

Update your React frontend's API base URL to:
```javascript
const API_BASE_URL = 'http://127.0.0.1:8000';
```

## Project Structure

```
stepout-backend/
├── stepout_analytics/     # Django project settings
├── api/                   # Main API app
│   ├── views.py          # API endpoints
│   ├── urls.py           # URL routing
│   ├── utils.py          # Helper functions
│   └── data/             # JSON data files
├── manage.py
└── requirements.txt
```

## Notes

- No database setup required
- CORS configured for localhost:5173 and localhost:3000
- Mock authentication (tokens not validated)
- Data persists in JSON files
