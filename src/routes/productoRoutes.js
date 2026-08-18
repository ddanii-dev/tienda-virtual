const express = require("express");

const productoController = require("../controllers/productoController");

const router = express.Router();

// Obtener todos los productos
router.get("/", productoController.obtenerProductos);

// Obtener un producto por ID
router.get("/:id", productoController.obtenerProducto);

// Crear un producto
router.post("/", productoController.crearProducto);

// Actualizar un producto
router.put("/:id", productoController.actualizarProducto);

// Eliminar un producto
router.delete("/:id", productoController.eliminarProducto);

module.exports = router;
