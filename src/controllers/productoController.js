const productoModel = require('../models/productoModel')

const obtenerProductos = async (req, res) => {
  try {
    const productos = await productoModel.obtenerTodos()

    res.status(200).json(productos);
  } catch (error) {
    console.error(error)

    res.status(500).json({
      mensaje: 'Error al obtener los productos',
    })
  }
}

const obtenerProducto = async (req, res) => {
  try {
    const { id } = req.params

    const producto = await productoModel.obtenerPorId(id)

    if (!producto) {
      return res.status(404).json({
        mensaje: 'Producto no encontrado',
      })
    }

    res.status(200).json(producto)
  } catch (error) {
    console.error(error)

    res.status(500).json({
      mensaje: 'Error al obtener el producto',
    })
  }
}

const crearProducto = async (req, res) => {
  try {
    console.log("Datos recibidos:", req.body);

    const { nombre, descripcion, precio, stock, categoria } = req.body;

    if (!nombre || !precio || !stock || !categoria) {
      return res.status(400).json({
        mensaje: "Faltan datos obligatorios del producto",
      });
    }

    const producto = {
      nombre,
      descripcion,
      precio,
      stock,
      categoria,
    };

    const resultado = await productoModel.crear(producto);

    res.status(201).json({
      mensaje: "Producto creado correctamente",
      id: resultado.insertId,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      mensaje: "Error al crear el producto",
    });
  }
};

const actualizarProducto = async (req, res) => {
  try {
    const { id } = req.params
    const producto = req.body

    const resultado = await productoModel.actualizar(id, producto)

    if (resultado.affectedRows === 0) {
      return res.status(404).json({
        mensaje: 'Producto no encontrado',
      })
    }

    res.status(200).json({
      mensaje: 'Producto actualizado correctamente',
    })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      mensaje: 'Error al actualizar el producto',
    })
  }
}

const eliminarProducto = async (req, res) => {
  try {
    const { id } = req.params

    const resultado = await productoModel.eliminar(id)

    if (resultado.affectedRows === 0) {
      return res.status(404).json({
        mensaje: 'Producto no encontrado',
      })
    }

    res.status(200).json({
      mensaje: 'Producto eliminado correctamente',
    })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      mensaje: 'Error al eliminar el producto',
    })
  }
}

module.exports = {
  obtenerProductos,
  obtenerProducto,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
}
