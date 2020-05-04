# ECAD Titulaciones

Servicio para leer, añadir, modificar y eliminar titulaciones

- [Servicios](#servicios)
  - [Servidor](#servidor)
  - [Base de datos](#base-de-datos)
  - [Control de versiones](#control-de-versiones)

# Servicios

## Servidor

### Descripción

Se compone de un servidor NodeJS basado en express que sirve un CRUD sobre títulos

### Acceso

Alojado en Heroku.com

> https://dashboard.heroku.com/pipelines/dd3ef81e-16b7-4f2f-ac71-83e669396f3b/settings

## Base de datos

NoSQL - MongoDB
Se compone de una instancia de Mongo Atlas

## Acceso

> https://cloud.mongodb.com/v2/5ea04ae5ecad6b18c6cb872c#clusters

## Control de versiones

> https://github.com/Binomi0/ecad-app

# USO

## Descripción de la API

URL: http://api.ecad.es

### Añadir titulo

POST /api/titulo

```json
{
  "nombre": "Nombre",
  "fechaInicio": 1579698596000,
  "fechaFin": 1587560996000,
  "formacion": "Master en... y módulo..."
}
```

### Modificar titulo

PUT /api/titulo/:id

Recibe un campo o varios y los actualiza

```json
{
  "nombre": "Nombre",
  "formacion": "Master en... y módulo...",
  "codigo": 2333
}
```

### Ver titulo

GET /api/titulo/:id

```json
{
  "_id": "5ea0836c552adc001728a87b",
  "nombre": "Nombre",
  "fechaInicio": "2020-01-22T13:09:56.000Z",
  "fechaFin": "2020-04-22T13:09:56.000Z",
  "formacion": "formacion",
  "createdAt": "2020-04-22T17:48:28.902Z",
  "updatedAt": "2020-04-22T17:48:28.902Z"
}
```

### Ver titulo

DELETE /api/titulo/:id

## Ver todos los títulos

- Éste endpoint debería ser securizado

## Para hacer cópias de seguridad

GET /api/titulos
