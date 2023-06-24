# APP para consumir EasyBrokerApi

# USE
- Fastapi(python)
- React(javascript)

## requerimientos
- Docker
- Docker-compose

## INIT
- Crear el archivo .env en la carpeta `api` tomando como base .env.example, no olvidando asignar el valor correcto de la key en la ENV `API_EASYBROKER_KEY` para el entorno de staging.

## RUN
```shell
docker compose up app_easy_broker
```

## RUN TESTS
```shell
docker compose up api_easy_broker -d
docker compose exec api_easy_broker pytest
```