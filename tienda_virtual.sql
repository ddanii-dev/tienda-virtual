CREATE DATABASE IF NOT EXISTS tienda_virtual;

USE tienda_virtual;

CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255),
    precio DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    categoria VARCHAR(100) NOT NULL
);

INSERT INTO productos (nombre, descripcion, precio, stock, categoria)
VALUES
('Teclado mecánico', 'Teclado mecánico RGB para gaming', 180000, 15, 'Periféricos'),
('Mouse gamer', 'Mouse gamer con iluminación RGB', 95000, 20, 'Periféricos'),
('Audífonos gamer', 'Audífonos con micrófono integrado', 150000, 10, 'Audio'),
('Monitor 24 pulgadas', 'Monitor Full HD de 24 pulgadas', 650000, 8, 'Monitores'),
('Webcam HD', 'Cámara web HD para videollamadas', 120000, 12, 'Cámaras');