import streamlit as st
import pandas as pd
import os
import seaborn as sns
import matplotlib.pyplot as plt

st.set_page_config(page_title="Health Risk Dashboard", layout="wide", page_icon="🏥")

st.title("🏥 AI-Powered Health Risk Analytics Dashboard")
st.markdown("Explore the health risk distributions based on real-world datasets and model predictions.")

# Load Data
@st.cache_data
def load_data():
    base_dir = os.path.join(os.path.dirname(__file__), '../data')
    try:
        df_diabetes = pd.read_csv(os.path.join(base_dir, 'diabetes_cleaned.csv'))
        df_heart = pd.read_csv(os.path.join(base_dir, 'heart_cleaned.csv'))
        df_lung = pd.read_csv(os.path.join(base_dir, 'lung_synthetic.csv'))
        return df_diabetes, df_heart, df_lung
    except FileNotFoundError:
        return None, None, None

df_diabetes, df_heart, df_lung = load_data()

if df_diabetes is None:
    st.warning("Data not generated yet. Please run the ML training pipeline first.")
else:
    # Sidebar
    st.sidebar.header("Navigation")
    dataset_option = st.sidebar.radio("Select Condition:", ["Diabetes", "Heart Disease", "Lung Risk (Synthetic)"])

    if dataset_option == "Diabetes":
        st.header("🩸 Diabetes Data Analytics")
        col1, col2 = st.columns(2)
        
        with col1:
            st.subheader("Outcome Distribution")
            fig, ax = plt.subplots()
            sns.countplot(data=df_diabetes, x='Outcome', ax=ax, palette='Set2')
            ax.set_xticklabels(['Negative', 'Positive'])
            st.pyplot(fig)
            
        with col2:
            st.subheader("Glucose vs BMI (by Outcome)")
            fig2, ax2 = plt.subplots()
            sns.scatterplot(data=df_diabetes, x='Glucose', y='BMI', hue='Outcome', alpha=0.6, palette='Set1', ax=ax2)
            st.pyplot(fig2)
            
        st.subheader("SHAP Feature Importance (Model Interpretation)")
        shap_path = os.path.join(os.path.dirname(__file__), '../notebooks/plots/diabetes_shap.png')
        if os.path.exists(shap_path):
            st.image(shap_path, use_container_width=True)
            
    elif dataset_option == "Heart Disease":
        st.header("🫀 Heart Disease Data Analytics")
        col1, col2 = st.columns(2)
        
        with col1:
            st.subheader("Target Distribution")
            fig, ax = plt.subplots()
            sns.countplot(data=df_heart, x='target', ax=ax, palette='coolwarm')
            ax.set_xticklabels(['Healthy', 'Heart Disease'])
            st.pyplot(fig)
            
        with col2:
            st.subheader("Age Distribution by Heart Disease")
            fig2, ax2 = plt.subplots()
            sns.histplot(data=df_heart, x='age', hue='target', multiple='stack', palette='coolwarm', ax=ax2)
            st.pyplot(fig2)
            
        st.subheader("SHAP Feature Importance (Model Interpretation)")
        shap_path = os.path.join(os.path.dirname(__file__), '../notebooks/plots/heart_shap.png')
        if os.path.exists(shap_path):
            st.image(shap_path, use_container_width=True)
            
    elif dataset_option == "Lung Risk (Synthetic)":
        st.header("🫁 Lung Risk Analytics (Based on Pollution & Lifestyle)")
        col1, col2 = st.columns(2)
        
        with col1:
            st.subheader("Risk Distribution")
            fig, ax = plt.subplots()
            sns.countplot(data=df_lung, x='Lung_Risk', ax=ax, palette='BuPu')
            ax.set_xticklabels(['Low Risk', 'High Risk'])
            st.pyplot(fig)
            
        with col2:
            st.subheader("PM2.5 vs Smoking Years")
            fig2, ax2 = plt.subplots()
            sns.scatterplot(data=df_lung, x='PM25', y='Smoking_Years', hue='Lung_Risk', alpha=0.7, palette='BuPu', ax=ax2)
            st.pyplot(fig2)
            
        st.subheader("SHAP Feature Importance (Model Interpretation)")
        shap_path = os.path.join(os.path.dirname(__file__), '../notebooks/plots/lung_shap.png')
        if os.path.exists(shap_path):
            st.image(shap_path, use_container_width=True)
