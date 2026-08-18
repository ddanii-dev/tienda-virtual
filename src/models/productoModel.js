const pool = require('../config/database')

const obtenerTodos = async () => {
  const [productos] = await pool.query("SELECT * FROM productos")

  return productos
}

const obtenerPorId = async (id) => {
  const [productos] = await pool.query(
    "SELECT * FROM productos WHERE id = ?",
    [id],
  )

  return productos[0]
}

const crear = async (producto) => {
  const { nombre, descripcion, precio, stock, categoria } = producto;

  const [resultado] = await pool.query(
    `INSERT INTO productos 
    (nombre, descripcion, precio, stock, categoria)
    VALUES (?, ?, ?, ?, ?)`,
    [nombre, descripcion, precio, stock, categoria],
  )

  return resultado;
}

const actualizar = async (id, producto) => {
  const { nombre, descripcion, precio, stock, categoria } = producto;

  const [resultado] = await pool.query(
    `UPDATE productos
    SET nombre = ?, descripcion = ?, precio = ?, stock = ?, categoria = ?
    WHERE id = ?`,
    [nombre, descripcion, precio, stock, categoria, id],
  )

  return resultado;
}

const eliminar = async (id) => {
  const [resultado] = await pool.query(
    'DELETE FROM productos WHERE id = ?',
    [id],
  )

  return resultado;
}

module.exports = {
  obtenerTodos,
  obtenerPorId,
  crear,
  actualizar,
  eliminar,
}
