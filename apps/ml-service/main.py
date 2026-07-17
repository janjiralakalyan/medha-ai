from fastapi import FastAPI
from pydantic import BaseModel
import random

app = FastAPI(
    title="MEDHA AI ML Service",
    description="Custom Machine Learning Microservice for MEDHA predictions and anomaly detection.",
    version="1.0.0"
)

# Dummy schemas for the endpoints
class InventoryRequest(BaseModel):
    item_id: str
    historical_data: list[int]

class FinanceRequest(BaseModel):
    revenue_history: list[float]

@app.get("/health")
def health_check():
    return {"status": "ok", "service": "MEDHA ML Service"}

@app.post("/predict/inventory")
def predict_inventory(request: InventoryRequest):
    """
    Mock endpoint for predicting future demand based on historical stock levels.
    In Phase 4, we will load a trained PyTorch/SKLearn model here.
    """
    # Simulate a forecast
    forecast = [x + random.randint(-10, 20) for x in request.historical_data]
    return {
        "item_id": request.item_id,
        "predicted_demand": forecast,
        "model_used": "mock_random_forest_v1"
    }

@app.post("/predict/expenses")
def predict_expenses(request: FinanceRequest):
    """
    Mock endpoint for forecasting expenses and detecting anomalies.
    """
    prediction = sum(request.revenue_history) / len(request.revenue_history) * 1.15
    return {
        "predicted_next_month_expenses": round(prediction, 2),
        "anomaly_detected": False
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
