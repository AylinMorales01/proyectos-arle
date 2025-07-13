const express = require('express');
const bodyParser = require('body-parser');
const rutasProductos = require('./routes/productoRoutes');

const app = express();
const puerto = 3000;

app.use(bodyParser.json()); // Permite recibir JSON

app.use('/api', rutasProductos); // http://localhost:3000/api/productos

app.listen(puerto, () => {
  console.log(`Servidor corriendo en http://localhost:${puerto}`);
});