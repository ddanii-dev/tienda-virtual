const express = require('express')

const productoController = require('../controllers/productoController')

const router = express.Router()

router.get('/', productoController.obtenerProductos)

router.get('/:id', productoController.obtenerProducto)

router.post("/", productoController.crearProducto);

router.put('/:id', productoController.actualizarProducto)

router.delete('/:id', productoController.eliminarProducto)

module.exports = router
