from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import pandas as pd
import numpy as np
import os
from pymongo import MongoClient
import traceback

app = Flask(__name__)
CORS(app)

# MongoDB connection (Local or Atlas - replace with your URI later)
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/")
try:
    client = MongoClient(MONGO_URI)
    db = client['health_risk_db']
    users_collection = db['users']
except Exception as e:
    print("Warning: MongoDB not connected.", e)
    users_collection = None

# Load Models
models_dir = os.path.join(os.path.dirname(__file__), '../models')
try:
    with open(os.path.join(models_dir, 'diabetes_model.pkl'), 'rb') as f:
        diabetes_model = pickle.load(f)
    with open(os.path.join(models_dir, 'heart_model.pkl'), 'rb') as f:
        heart_model = pickle.load(f)
    with open(os.path.join(models_dir, 'lung_model.pkl'), 'rb') as f:
        lung_model = pickle.load(f)
    print("Models loaded successfully!")
except Exception as e:
    print("Error loading models. Run ML training script first.", e)

def get_recommendation(risk_type, is_high_risk):
    recommendations = {
        'diabetes': "Consult an Endocrinologist. Focus on a low-sugar diet and regular exercise.",
        'heart': "Consult a Cardiologist. Monitor blood pressure and cholesterol levels. Engage in cardio exercises.",
        'lung': "Consult a Pulmonologist. Avoid smoking, use air purifiers, and wear masks in high-pollution areas."
    }
    healthy = "Keep maintaining a healthy lifestyle!"
    return recommendations[risk_type] if is_high_risk else healthy

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        print("Received data:", data)
        # We need to extract features for each model
        # Diabetes: Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, BMI, DiabetesPedigreeFunction, Age
        # Heart: age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal
        # Lung: Age, PM25, PM10, NO2, Smoking_Years
        
        # We will assume a unified form where applicable, otherwise plug in default/average values for missing.
        # This is for demo purposes.
        
        # --- 1. Diabetes Prediction ---
        # User provides: Age, BMI, BloodPressure, Glucose.
        # Default others: Pregnancies=0, SkinThickness=20, Insulin=80, DPF=0.5
        diab_features = pd.DataFrame([{
            'Pregnancies': float(data.get('pregnancies', 0)),
            'Glucose': float(data.get('glucose', 100)),
            'BloodPressure': float(data.get('blood_pressure', 80)),
            'SkinThickness': 20.0,
            'Insulin': 80.0,
            'BMI': float(data.get('bmi', 25)),
            'DiabetesPedigreeFunction': 0.5,
            'Age': float(data.get('age', 30))
        }])
        
        diabetes_risk = int(diabetes_model.predict(diab_features)[0])
        
        # --- 2. Heart Prediction ---
        # User provides: Age, Sex, ChestPain, BloodPressure, Cholesterol.
        # Default others: fbs=0, restecg=1, thalach=150, exang=0, oldpeak=1.0, slope=2, ca=0, thal=2
        heart_features = pd.DataFrame([{
            'age': float(data.get('age', 30)),
            'sex': int(data.get('sex', 1)),  # 1: male, 0: female
            'cp': int(data.get('chest_pain', 0)),
            'trestbps': float(data.get('blood_pressure', 120)),
            'chol': float(data.get('cholesterol', 200)),
            'fbs': 0,
            'restecg': 1,
            'thalach': 150.0,
            'exang': 0,
            'oldpeak': 1.0,
            'slope': 2,
            'ca': 0,
            'thal': 2
        }])
        
        heart_risk = int(heart_model.predict(heart_features)[0])
        
        # --- 3. Lung Prediction ---
        # User provides: Age, Smoking_Years, PM25.
        # Default others: PM10=PM25*2, NO2=30
        pm25 = float(data.get('pm25', 50))
        lung_features = pd.DataFrame([{
            'Age': float(data.get('age', 30)),
            'PM25': pm25,
            'PM10': pm25 * 2.0,
            'NO2': 30.0,
            'Smoking_Years': float(data.get('smoking_years', 0))
        }])
        
        lung_risk = int(lung_model.predict(lung_features)[0])
        
        # Build Result
        result = {
            "diabetes_risk": diabetes_risk,
            "diabetes_recommendation": get_recommendation('diabetes', diabetes_risk == 1),
            "heart_risk": heart_risk,
            "heart_recommendation": get_recommendation('heart', heart_risk == 1),
            "lung_risk": lung_risk,
            "lung_recommendation": get_recommendation('lung', lung_risk == 1),
            "status": "success"
        }
        
        # Save to DB asynchronously or synchronously
        if users_collection is not None:
            try:
                db_record = data.copy()
                db_record['predictions'] = result
                users_collection.insert_one(db_record)
            except Exception as db_err:
                print(f"Warning: Failed to save to MongoDB: {db_err}")
            
        return jsonify(result)
    
    except Exception as e:
        print(traceback.format_exc())
        return jsonify({"status": "error", "message": str(e)}), 400

@app.route('/', methods=['GET'])
def health_check():
    return jsonify({"status": "API is running."})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
