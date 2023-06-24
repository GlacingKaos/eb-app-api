import requests
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .config import settings

app = FastAPI()


origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/properties")
async def read_properties(page: int = 1, limit: int = 20):
    resp_data = {
        "pagination": {"limit": limit, "page": page, "total": 0, "next_page": ""},
        "content": [],
    }

    url = f"{settings.api_easybroker_url}properties"
    headers = {
        "accept": "application/json",
        "X-Authorization": str(settings.api_easybroker_key),
    }
    payload = {"limit": limit, "page": page}

    r = requests.get(url, headers=headers, params=payload)
    if r.status_code == 200:
        resp_data = r.json()

    return resp_data
