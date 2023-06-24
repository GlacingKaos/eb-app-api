from fastapi.testclient import TestClient

from .main import app

client = TestClient(app)


def test_read_properties_ok():
    response = client.get("/properties?limit=10&page=2")
    assert response.status_code == 200
    data_resp = response.json()
    assert data_resp["pagination"]["limit"] == 10
    assert data_resp["pagination"]["page"] == 2
    assert len(data_resp["content"]) == 10
