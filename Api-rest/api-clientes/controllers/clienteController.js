const db = require('../models/db');

// Obtener todos los clientes
exports.getClientes = (req, res) => {
  db.query('SELECT * FROM clientes', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// Obtener cliente por ID
exports.getClienteById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM clientes WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    res.json(results[0]);
  });
};

// Crear cliente
exports.createCliente = (req, res) => {
  const { nombre, email } = req.body;
  db.query('INSERT INTO clientes (nombre, email) VALUES (?, ?)', [nombre, email], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensaje: 'Cliente creado', id: result.insertId });
  });
};

// Actualizar cliente
exports.updateCliente = (req, res) => {
  const { id } = req.params;
  const { nombre, email } = req.body;
  db.query('UPDATE clientes SET nombre = ?, email = ? WHERE id = ?', [nombre, email, id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.affectedRows === 0) return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    res.json({ mensaje: 'Cliente actualizado' });
  });
};

// Eliminar cliente
exports.deleteCliente = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM clientes WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.affectedRows === 0) return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    res.json({ mensaje: 'Cliente eliminado' });
  });
};

