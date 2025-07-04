# 🛠 Proyecto Final Node.js - API de Productos

Este proyecto es una API RESTful desarrollada en Node.js que gestiona un catálogo de productos. Utiliza una arquitectura modular basada en controladores, servicios y modelos, y almacena los datos en un archivo JSON.

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- File System (fs)
- JSON como base de datos local
- CORS
- ESM (ECMAScript Modules)

## 📁 Estructura del proyecto

src/
├── controllers/ 
│ └── products.controller.js 
├── services/ 
│ └── products.service.js 
├── models/ 
│ ├── products.model.js 
│ └── products.json 
├── routes/ 
│ └── products.router.js index.js


## 🧠 Arquitectura

- **Controladores**: manejan las peticiones HTTP y delegan la lógica.
- **Servicios**: contienen la lógica de negocio y validaciones.
- **Modelos**: acceden directamente al archivo `products.json` para leer y escribir datos.

## 📡 Endpoints disponibles

| Método | Ruta                    | Descripción                          |
|--------|-------------------------|--------------------------------------|
| GET    | `/api/products`         | Obtener todos los productos          |
| GET    | `/api/products/:id`     | Obtener un producto por su ID        |
| GET    | `/api/products?nombre=` | Buscar productos por nombre          |
| POST   | `/api/products`         | Crear un nuevo producto              |
| PUT    | `/api/products/:id`     | Actualizar un producto existente     |
| DELETE | `/api/products/:id`     | Eliminar un producto por su ID       |

## 📦 Formato de producto

JSON
{
  "id": 1,
  "name": "Campera impermeable",
  "price": 12000,
  "categories": ["ropa", "paraguas"]
}

## ▶️ Cómo ejecutar el proyecto

1. Clonar el repositorio
2. Instalar dependencias:
        _ bash
        _ npm install
3. Ejecutar el servidor:
        _ npm run dev
4. Acceder a la API en: http://localhost:3000/api/products

## ✍️ Autor
Federico Maciel Proyecto final - Talento Tech Node.js 2025