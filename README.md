# ECAD Titulaciones

Servicio para leer, añadir, modificar y eliminar titulaciones

## API Server

URL: http://api.ecad.es

### Añadir titulo

POST /api/titulo

```json
{
  "nombre": "Nombre",
  "dni": "4343434S-F",
  "fechaInicio": 1579698596000,
  "fechaFin": 1587560996000,
  "formacion": "Master en... y módulo...",
  "codigo": 2333
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
  "dni": "4343434S",
  "fechaInicio": "2020-01-22T13:09:56.000Z",
  "fechaFin": "2020-04-22T13:09:56.000Z",
  "formacion": "formacion",
  "codigo": "2333",
  "createdAt": "2020-04-22T17:48:28.902Z",
  "updatedAt": "2020-04-22T17:48:28.902Z"
}
```

### Ver titulo

DELETE /api/titulo/:id
