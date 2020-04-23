# ECAD Titulaciones

Servicio para leer, añadir, modificar y eliminar titulaciones

## API Server

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
