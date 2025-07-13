const express = require('express');
const router = express.Router();
const controlador = require('../controllers/productoController');

// Rutas
router.get('/productos', controlador.listarProductos);
router.post('/productos', controlador.agregarProducto);
router.delete('/productos/:id', controlador.borrarProducto);
router.put('/productos/:id', controlador.actualizarProducto);

module.exports = router;