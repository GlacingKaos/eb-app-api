# APP para consumir EasyBrokerApi

# USE
- Fastapi(python)
- React(javascript)

![image](https://github.com/GlacingKaos/eb-app-api/assets/23129664/13d2f3d4-8cbc-429c-9a66-14c7011c8eb4)

## requerimientos
- Docker(https://www.docker.com/products/docker-desktop/)
- Docker-compose

## INIT
- Primero tener instalado Docker y Docker-compose en la maquina.
- Crear el archivo .env en la carpeta `api` tomando como base .env.example, no olvidando asignar el valor correcto de la key en la ENV `API_EASYBROKER_KEY` para el entorno de staging.

## RUN
```shell
git clone https://github.com/GlacingKaos/eb-app-api.git
cd eb-app-api
docker compose up app_easy_broker
```
A continuacion ir a http://localhost:3000/

## RUN TESTS
```shell
docker compose up api_easy_broker -d
docker compose exec api_easy_broker pytest
```
