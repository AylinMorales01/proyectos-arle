const Producto = require('../models/productoModel');

// Obtener todos los productos
const listarProductos = (req, res) => {
  Producto.obtenerProductos((err, resultados) => {
    if (err) return res.status(500).json({ error: err });
    res.json(resultados);
  });
};

// Crear un producto
const agregarProducto = (req, res) => {
  const { nombre, precio } = req.body;
  Producto.crearProducto(nombre, precio, (err, resultado) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensaje: 'Producto agregado', id: resultado.insertId });
  });
};

// Eliminar un producto
const borrarProducto = (req, res) => {
  const { id } = req.params;
  Producto.eliminarProducto(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensaje: 'Producto eliminado' });
  });
};

// Obtener producto por ID
const obtenerProductoPorId = (req, res) => {
  const { id } = req.params;
  Producto.obtenerProductoPorId(id, (err, resultados) => {
    if (err) return res.status(500).json({ error: err });
    if (resultados.length === 0) return res.status(404).json({ mensaje: 'Producto no encontrado' });
    res.json(resultados[0]);
  });
};

// Actualizar producto por ID
const actualizarProducto = (req, res) => {
  const { id } = req.params;
  const { nombre, precio } = req.body;

  Producto.actualizarProducto(id, nombre, precio, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensaje: 'Producto actualizado' });
  });
};

module.exports = {
  listarProductos,
  agregarProducto,
  borrarProducto,
  obtenerProductoPorId,
  actualizarProducto 
};