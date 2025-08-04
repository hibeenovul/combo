#!/usr/bin/env bash

pip install -r requirements.txt

# Istall frontend dependencies and build
cd backend/frontend-src
npm install
npm run build
cd ../..

#Collect static files for Django
python backend/manage.py collectstatic --noinput