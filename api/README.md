# API para consumir EasyBrokerApi

## requerimientos
- Docker

## RUN
```shell
docker build -t api_easy_broker .
docker run -d --name api_easy_broker_container -p 8000:8000 api_easy_broker
```