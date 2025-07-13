const db = require('../db');

// Obtener todos los productos
const obtenerProductos = (callback) => {
  db.query('SELECT * FROM productos', callback);
};

// Crear un nuevo producto
const crearProducto = (nombre, precio, callback) => {
  db.query('INSERT INTO productos (nombre, precio) VALUES (?, ?)', [nombre, precio], callback);
};

// Eliminar un producto
const eliminarProducto = (id, callback) => {
  db.query('DELETE FROM productos WHERE id = ?', [id], callback);
};

// Obtener un producto por ID
const obtenerProductoPorId = (id, callback) => {
  db.query('SELECT * FROM productos WHERE id = ?', [id], callback);
};

// Actualizar un producto
const actualizarProducto = (id, nombre, precio, callback) => {
  db.query('UPDATE productos SET nombre = ?, precio = ? WHERE id = ?', [nombre, precio, id], callback);
};

module.exports = {
  obtenerProductos,
  crearProducto,
  eliminarProducto,
  obtenerProductoPorId,
  actualizarProducto      
};