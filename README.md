# AI-Powered Smart Health Risk Prediction Platform

## Overview
This is a full-stack, AI-driven healthcare platform designed to predict multiple disease risks (Diabetes, Heart Disease, and Lung issues) using Machine Learning models. The platform features an interactive React frontend with a modern glassmorphism design, a robust Flask backend for serving predictions, and an analytics dashboard built with Streamlit.

## Features
- **Machine Learning Models**: 
  - Random Forest for Diabetes Prediction (Pima Indians Dataset).
  - XGBoost for Heart Disease Prediction (UCI Heart Dataset).
  - Random Forest for Synthetic Lung Risk Prediction.
- **RESTful API**: Flask backend handling predictions and (optional) MongoDB data persistence.
- **React UI**: Vite + React frontend with a sleek, premium, responsive UI.
- **Analytics Dashboard**: Streamlit application to visualize data distributions and insights.
- **Explainable AI (Optional)**: SHAP integration for understanding feature importance (disabled by default based on numpy version compatibility).

## Architecture
1. **Frontend**: React (`frontend/`)
2. **Backend Engine**: Flask (`backend/`)
3. **ML Pipeline**: Scikit-Learn / XGBoost (`models/`)
4. **Dashboard**: Streamlit (`dashboard/`)

## How to Run the Project Locally

### Prerequisites
- Python 3.9+
- Node.js & npm

### 1. Run the Machine Learning Pipeline (Optional if models exist)
Navigate to the `models` directory and run the training pipeline:
```bash
cd models
pip install -r requirements_ml.txt
python train_all_models.py
```

### 2. Start the Backend API (Flask)
Navigate to the `backend` folder and start the server:
```bash
cd backend
pip install -r requirements_backend.txt
python app.py
```
The server will run on `http://localhost:5000`.

### 3. Start the Frontend UI (React)
Navigate to the `frontend` directory:
```bash
cd frontend
npm install
npm run dev
```
Open the provided `localhost` link in your browser.

### 4. Start the Analytics Dashboard (Streamlit)
Navigate to the `dashboard` directory:
```bash
cd dashboard
pip install streamlit
streamlit run app.py
```
This will open the analytics dashboard on `http://localhost:8501`.

---
## Future Enhancements
- Deploy the models to AWS or Render.
- Add user authentication and a login page via JWT.
- Full MongoDB Atlas integration to track historical user predictions.
- Expand the ML features to include diet analysis and automated medical reports.
