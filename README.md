# Backend 3 - Entrega Final

## Autor

Emiliano Quiñones

## Descripción

API REST desarrollada con Node.js, Express y MongoDB para la gestión de usuarios, mascotas y adopciones. El proyecto implementa el patrón Repository, documentación con Swagger, tests funcionales utilizando Mocha, Chai y Supertest, y está dockerizado para facilitar su despliegue.

## Tecnologías

- Node.js
- Express
- MongoDB
- Mongoose
- Swagger
- Docker
- Mocha
- Chai
- Supertest

## Imagen en Docker Hub

https://hub.docker.com/r/emilianoq/adoptme

## Descargar la imagen

```bash
docker pull emilianoq/adoptme:latest
```

## Ejecutar el contenedor

```bash
docker run -p 8080:8080 emilianoq/adoptme:latest
```

## Ejecutar el proyecto localmente

```bash
npm install
npm start
```

## Ejecutar los tests

```bash
npm test
```

## Documentación Swagger

Una vez iniciado el proyecto, acceder a:

http://localhost:8080/apidocs