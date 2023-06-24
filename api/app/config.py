from pydantic import BaseSettings


class Settings(BaseSettings):
    app_name: str = "Awesome API"
    api_easybroker_url: str
    api_easybroker_key: str


settings = Settings()
