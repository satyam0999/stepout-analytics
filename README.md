# Player Report Dashboard - Full Stack Assignment

This project is a full-stack web application built as a screening assignment. It features a React frontend and a Django backend, designed to replicate a Figma design for a login screen and a player analytics dashboard.

---

## 🚀 Live Demo

The project is deployed and live. You can access it here:

**[https://stepout-analytics.vercel.app/](https://stepout-analytics.vercel.app/)**

**Note:** The backend is hosted on Render's free tier. It may take 30-60 seconds for the server to spin up on the first request if it has been inactive. Please be patient on the login screen.

### 🔑 Test Credentials

You can use the following credentials to log in and view the dashboard:

* **Emails**: `player1@stepout.com`, `player2@stepout.com`, `player3@stepout.com`
* **Password**: `stepout123` (for all accounts)

---

## ⚙️ Setup and Installation

To run this project locally, follow the steps below.

### Prerequisites

* Node.js and npm (or yarn)
* Python and pip
* Git

### 1. Clone the Repository

```bash
git clone https://github.com/satyam0999/stepout-analytics.git
```

### 2. Backend Setup (Django)

```bash
# Navigate to the backend directory
cd backend

# Create and activate a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`

# Install the required dependencies
pip install -r requirements.txt

# Run the Django development server
python manage.py runserver
```
The backend server will be running at `http://127.0.0.1:8000`.

### 3. Frontend Setup (React)

```bash
# Open a new terminal and navigate to the frontend directory
cd frontend

# Install the required dependencies
npm install

# Start the React development server
npm run dev
```
The frontend application will be running at `http://localhost:5173`.

---

## 🔗 API Endpoints

The Django backend provides the following API endpoints:

| Method | Endpoint         | Description                                        |
| :----- | :--------------- | :------------------------------------------------- |
| `POST` | `/api/login/`    | Accepts `email` and `password`. Returns a mock token on success. |
| `GET`  | `/api/reports/`  | Returns a list of mock player report data.         |

---

## 📂 Project Structure

The repository is organized into two main directories:

```
.
├── backend/      # Django Project
└── frontend/     # React Project
```

This separation ensures a clean and maintainable codebase for both the client and server-side applications.
