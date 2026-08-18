const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

const express = require("express");
const productoRoutes = require("./routes/productoRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware para recibir JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    mensaje: "Tienda virtual funcionando",
  });
});

app.use("/api/productos", productoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});