import os
import json
import joblib
import pandas as pd
from datetime import datetime, timezone
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder, LabelEncoder
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.metrics import accuracy_score, precision_recall_fscore_support, confusion_matrix

from app.ml.priority.generate_dataset import generate_synthetic_dataset

VERSION = "1.0.0"

def train_and_evaluate():
    # 1. Generate Dataset
    df = generate_synthetic_dataset(num_samples=2000, random_seed=42)
    
    # 2. Setup features and target
    target = "priority_class"
    numeric_features = ["issue_count", "max_severity_score", "total_damage_area", "road_age_years"]
    categorical_features = ["traffic_volume", "nearby_sensitive_location"]
    
    X = df[numeric_features + categorical_features]
    y = df[target]
    
    # Label encode target
    le = LabelEncoder()
    y_encoded = le.fit_transform(y)
    class_mapping = {str(i): str(c) for i, c in enumerate(le.classes_)}
    
    # 3. Train/Test Split
    X_train, X_test, y_train, y_test = train_test_split(X, y_encoded, test_size=0.2, random_state=42, stratify=y_encoded)
    
    # 4. Preprocessing Pipeline
    numeric_transformer = Pipeline(steps=[
        ('imputer', SimpleImputer(strategy='median')),
        ('scaler', StandardScaler())
    ])
    
    categorical_transformer = Pipeline(steps=[
        ('imputer', SimpleImputer(strategy='most_frequent')),
        ('onehot', OneHotEncoder(handle_unknown='ignore'))
    ])
    
    preprocessor = ColumnTransformer(
        transformers=[
            ('num', numeric_transformer, numeric_features),
            ('cat', categorical_transformer, categorical_features)
        ])
    
    # 5. Define Models
    models = {
        "LogisticRegression": LogisticRegression(max_iter=1000, random_state=42),
        "DecisionTree": DecisionTreeClassifier(random_state=42),
        "RandomForest": RandomForestClassifier(n_estimators=100, random_state=42),
        "GradientBoosting": GradientBoostingClassifier(n_estimators=100, random_state=42)
    }
    
    best_model = None
    best_f1 = -1
    best_model_name = ""
    results = {}
    
    # 6. Train and Evaluate
    for name, clf in models.items():
        pipeline = Pipeline(steps=[('preprocessor', preprocessor),
                                   ('classifier', clf)])
        
        pipeline.fit(X_train, y_train)
        y_pred = pipeline.predict(X_test)
        
        acc = accuracy_score(y_test, y_pred)
        precision, recall, f1, _ = precision_recall_fscore_support(y_test, y_pred, average='weighted', zero_division=0)
        cm = confusion_matrix(y_test, y_pred).tolist()
        
        results[name] = {
            "accuracy": float(acc),
            "precision": float(precision),
            "recall": float(recall),
            "f1_score": float(f1),
            "confusion_matrix": cm
        }
        
        # We use RandomForest as primary, but track best overall for metrics
        if name == "RandomForest":
            best_model = pipeline
            best_model_name = name
    
    # 7. Persist Artifacts
    artifacts_dir = os.path.join(os.path.dirname(__file__), "artifacts")
    os.makedirs(artifacts_dir, exist_ok=True)
    
    model_path = os.path.join(artifacts_dir, "priority_model.joblib")
    joblib.dump(best_model, model_path)
    
    metadata = {
        "model_version": VERSION,
        "training_timestamp": datetime.now(timezone.utc).isoformat(),
        "selected_model": best_model_name,
        "feature_schema": {
            "numeric": numeric_features,
            "categorical": categorical_features
        },
        "class_mapping": class_mapping,
        "evaluation_metrics": results
    }
    
    with open(os.path.join(artifacts_dir, "metadata.json"), "w") as f:
        json.dump(metadata, f, indent=4)
        
    return metadata

if __name__ == "__main__":
    meta = train_and_evaluate()
    print(f"Training complete. Selected {meta['selected_model']}. F1 Score: {meta['evaluation_metrics'][meta['selected_model']]['f1_score']:.4f}")
