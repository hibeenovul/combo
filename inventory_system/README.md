# 🗂️ Inventory Management System

This project is a fullstack **Inventory Management System** built with:

- ⚙️ **Django** – Backend REST API
- ⚛️ **React + Vite** – Frontend UI
- 🌐 **PostgreSQL / SQLite** – Database
- 🌍 Fully responsive for **web and mobile**

---


## 🚀 Getting Started

### 1️⃣ Backend – Django Setup

```bash
cd backend

# Create virtual environment
python -m venv env
source env/bin/activate

# Install dependencies
pip install -r requirements.txt

# Migrate and run server
python manage.py migrate
python manage.py runserver


cd frontend-src

# Install dependencies
npm install

# Build frontend for Django
npm run build


🎯 Features
📦 Product Management (CRUD)

🏷️ Categories

👥 User Authentication

📊 Sales & Stock Reports

📱 Fully Responsive (Web + Mobile)

⚙️ Deployment Notes
Vite build must be run before deploying (npm run build)

backend/frontend/assets/ and index.html must exist during deployment

Environment variables should go in .env (ignored in Git)

🙋‍♂️ Author
Built by Ibrahim Ogunleke
💼 Fullstack Developer | Django + React
hibeenovul@gmail.com

