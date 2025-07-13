const express = require('express');
const app = express();
const clientesRoutes = require('./routes/clienteRoutes'); // Mantienes como está

// Middleware para leer JSON
app.use(express.json());

// Ruta base
app.use('/clientes', clientesRoutes); // Cambias aquí para usar 'clientesRoutes'

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});