const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.get('/', clienteController.getClientes);
router.post('/', clienteController.createCliente);
router.delete('/:id', clienteController.deleteCliente);
router.get('/:id', clienteController.getClienteById);
router.put('/:id', clienteController.updateCliente);

module.exports = router;
