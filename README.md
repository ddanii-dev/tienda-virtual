# Tienda Virtual

Este proyecto es una tienda virtual desarrollada como parte de un proyecto de aprendizaje de desarrollo de software.

La aplicación permite administrar productos de una tienda mediante una API REST. Los productos se almacenan en una base de datos MySQL y se pueden crear, consultar, actualizar y eliminar.

## Tecnologías utilizadas

- Node.js
- Express.js
- MySQL
- JavaScript
- Git y GitHub
- Postman

## Funciones principales

La API permite realizar las operaciones básicas de un CRUD:

- Crear productos.
- Consultar todos los productos.
- Consultar un producto por su ID.
- Actualizar productos.
- Eliminar productos.

## Estructura del proyecto

```text
tienda-virtual/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   └── productoController.js
│   ├── models/
│   │   └── productoModel.js
│   ├── routes/
│   │   └── productoRoutes.js
│   └── app.js
│
├── .env
├── .gitignore
├── README.md
├── package.json
└── package-lock.json

```

## Instalación

Para utilizar el proyecto se necesita tener instalado Node.js y MySQL.

Primero se deben instalar las dependencias del proyecto:

```bash
npm install
```

Después se debe crear la base de datos en MySQL y configurar las credenciales en el archivo `.env`.

## Configuración del archivo .env

El archivo `.env` debe tener una configuración similar a esta:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=TU_CONTRASEÑA
DB_NAME=tienda_virtual
DB_PORT=3306
PORT=3000
```

La contraseña debe ser la que tenga configurada el usuario de MySQL.

El archivo `.env` no se sube a GitHub porque contiene información privada.

## Ejecutar el proyecto

Para iniciar el servidor se utiliza:

```bash
npm run dev
```

El servidor estará disponible en:

```text
http://localhost:3000
```

## Endpoints

### Obtener todos los productos

```http
GET /api/productos
```

### Obtener un producto por ID

```http
GET /api/productos/:id
```

### Crear un producto

```http
POST /api/productos
```

Ejemplo:

```json
{
  "nombre": "Silla gamer",
  "descripcion": "Silla gamer ergonomica",
  "precio": 450000,
  "stock": 7,
  "categoria": "Muebles"
}
```

### Actualizar un producto

```http
PUT /api/productos/:id
```

### Eliminar un producto

```http
DELETE /api/productos/:id
```

## Pruebas

Las diferentes operaciones de la API fueron probadas utilizando Postman. Se verificaron las operaciones de crear, consultar, actualizar y eliminar productos.

## Base de datos

El proyecto utiliza MySQL para almacenar la información de los productos.

La base de datos utilizada se llama:

```text
tienda_virtual
```

La tabla principal utilizada en el proyecto es:

```text
productos
```

Esta tabla contiene información como el nombre, descripción, precio, stock y categoría de cada producto.

## Versionamiento

El proyecto utiliza Git para llevar un control de los cambios realizados durante el desarrollo.

El código también se encuentra almacenado en GitHub.

Se realizaron diferentes commits para guardar los cambios importantes del proyecto.

## Estándar de codificación

Para el desarrollo del proyecto se utiliza una estructura modular, separando las responsabilidades en diferentes archivos.

Los nombres de variables y funciones utilizan nombres descriptivos en español y se utiliza camelCase para las funciones y variables.

También se utilizan consultas parametrizadas para evitar insertar directamente los datos recibidos por el usuario en las consultas SQL.

## Autor

Daniel Felipe López Serrano.
Proyecto realizado como parte del proceso de aprendizaje en Análisis y Desarrollo de Software - SENA.