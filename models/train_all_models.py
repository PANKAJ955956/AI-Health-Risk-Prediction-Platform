import pandas as pd
import numpy as np
import pickle
import os
# import shap # Disabled due to Numpy 2.0 compatibility issues
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from xgboost import XGBClassifier
from sklearn.metrics import accuracy_score, classification_report

# Ensure directories exist
os.makedirs('../models', exist_ok=True)
os.makedirs('../notebooks/plots', exist_ok=True)
os.makedirs('../data', exist_ok=True)

print("Starting Model Training Pipeline...")

# ==========================================
# 1. Diabetes Model (Pima Indians)
# ==========================================
print("\n--- Training Diabetes Model ---")
diabetes_url = "https://raw.githubusercontent.com/jbrownlee/Datasets/master/pima-indians-diabetes.data.csv"
diabetes_cols = ['Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age', 'Outcome']
df_diabetes = pd.read_csv(diabetes_url, names=diabetes_cols)

# Basic Cleaning: Replace 0 with mean for some columns
for col in ['Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI']:
    df_diabetes[col] = df_diabetes[col].replace(0, np.nan)
    df_diabetes.fillna(df_diabetes.mean(), inplace=True)

# Important Features according to User Request: Age, BMI, Blood Pressure, Glucose (we'll keep all for now)
X_diab = df_diabetes.drop("Outcome", axis=1)
y_diab = df_diabetes["Outcome"]

X_train_d, X_test_d, y_train_d, y_test_d = train_test_split(X_diab, y_diab, test_size=0.2, random_state=42)

diab_model = RandomForestClassifier(n_estimators=100, random_state=42)
diab_model.fit(X_train_d, y_train_d)
y_pred_d = diab_model.predict(X_test_d)

print(f"Diabetes Model Accuracy: {accuracy_score(y_test_d, y_pred_d):.4f}")
pickle.dump(diab_model, open('../models/diabetes_model.pkl', 'wb'))

# try:
#     # SHAP for Diabetes
#     explainer_d = shap.TreeExplainer(diab_model)
#     shap_values_d = explainer_d.shap_values(X_test_d)
#     
#     plt.figure()
#     shap.summary_plot(shap_values_d[1] if isinstance(shap_values_d, list) else shap_values_d, X_test_d, show=False)
#     plt.title("SHAP Feature Importance - Diabetes Model")
#     plt.tight_layout()
#     plt.savefig('../notebooks/plots/diabetes_shap.png')
#     plt.close()
# except Exception as e:
#     print(f"SHAP for Diabetes skipped due to error: {e}")

# Save sample data
df_diabetes.to_csv('../data/diabetes_cleaned.csv', index=False)

# ==========================================
# 2. Heart Disease Model (UCI)
# ==========================================
print("\n--- Training Heart Disease Model ---")
heart_url = "https://archive.ics.uci.edu/ml/machine-learning-databases/heart-disease/processed.cleveland.data"
heart_cols = ['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal', 'target']
df_heart = pd.read_csv(heart_url, names=heart_cols, na_values='?')

df_heart.fillna(df_heart.median(), inplace=True)
# Target is 0 (no presence) to 4. Convert to binary 0/1
df_heart['target'] = df_heart['target'].apply(lambda x: 1 if x > 0 else 0)

X_heart = df_heart.drop('target', axis=1)
y_heart = df_heart['target']

X_train_h, X_test_h, y_train_h, y_test_h = train_test_split(X_heart, y_heart, test_size=0.2, random_state=42)

heart_model = XGBClassifier(use_label_encoder=False, eval_metric='logloss', random_state=42)
heart_model.fit(X_train_h, y_train_h)
y_pred_h = heart_model.predict(X_test_h)

print(f"Heart Disease Model Accuracy: {accuracy_score(y_test_h, y_pred_h):.4f}")
pickle.dump(heart_model, open('../models/heart_model.pkl', 'wb'))

# try:
#     # SHAP for Heart
#     explainer_h = shap.TreeExplainer(heart_model)
#     shap_values_h = explainer_h.shap_values(X_test_h)
#     
#     plt.figure()
#     shap.summary_plot(shap_values_h, X_test_h, show=False)
#     plt.title("SHAP Feature Importance - Heart Disease Model")
#     plt.tight_layout()
#     plt.savefig('../notebooks/plots/heart_shap.png')
#     plt.close()
# except Exception as e:
#     print(f"SHAP for Heart skipped due to error: {e}")

df_heart.to_csv('../data/heart_cleaned.csv', index=False)

# ==========================================
# 3. Lung Risk Model (Synthetic)
# ==========================================
print("\n--- Training Lung Risk Model (Synthetic) ---")
# Generate synthetic data based on Air Pollution and health features
np.random.seed(42)
n_samples = 1000

data_lung = {
    'Age': np.random.randint(18, 80, n_samples),
    'PM25': np.random.uniform(10, 150, n_samples),
    'PM10': np.random.uniform(20, 200, n_samples),
    'NO2': np.random.uniform(10, 100, n_samples),
    'Smoking_Years': np.random.randint(0, 40, n_samples),
}

df_lung = pd.DataFrame(data_lung)

# Define a synthetic risk score
# Higher age, higher PM2.5, NO2, and smoking increases risk
risk_score = (df_lung['Age'] * 0.3 + 
              df_lung['PM25'] * 0.5 + 
              df_lung['PM10'] * 0.1 + 
              df_lung['Smoking_Years'] * 2.5 + 
              np.random.normal(0, 10, n_samples))

# Threshold for high risk (top 30%)
threshold = np.percentile(risk_score, 70)
df_lung['Lung_Risk'] = (risk_score > threshold).astype(int)

X_lung = df_lung.drop('Lung_Risk', axis=1)
y_lung = df_lung['Lung_Risk']

X_train_l, X_test_l, y_train_l, y_test_l = train_test_split(X_lung, y_lung, test_size=0.2, random_state=42)

lung_model = RandomForestClassifier(n_estimators=100, random_state=42)
lung_model.fit(X_train_l, y_train_l)
y_pred_l = lung_model.predict(X_test_l)

print(f"Lung Risk Model Accuracy: {accuracy_score(y_test_l, y_pred_l):.4f}")
pickle.dump(lung_model, open('../models/lung_model.pkl', 'wb'))

# try:
#     # SHAP for Lung
#     explainer_l = shap.TreeExplainer(lung_model)
#     shap_values_l = explainer_l.shap_values(X_test_l)
#     
#     plt.figure()
#     shap.summary_plot(shap_values_l[1] if isinstance(shap_values_l, list) else shap_values_l, X_test_l, show=False)
#     plt.title("SHAP Feature Importance - Lung Risk Model")
#     plt.tight_layout()
#     plt.savefig('../notebooks/plots/lung_shap.png')
#     plt.close()
# except Exception as e:
#     print(f"SHAP for Lung skipped due to error: {e}")

df_lung.to_csv('../data/lung_synthetic.csv', index=False)

print("\nModel pipeline completed successfully!")
print("Models saved in 'models/' directory.")
print("SHAP plots saved in 'notebooks/plots/' directory.")
