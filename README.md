# 🛠 Proyecto Final Node.js - API de Productos

Este proyecto es una API RESTful desarrollada en Node.js que gestiona un catálogo de productos. Utiliza una arquitectura modular basada en controladores, servicios y modelos, y almacena los datos en **Firestore**, la base de datos NoSQL de Firebase.


## 🚀 Tecnologías utilizadas

- Node.js
- Express
- Firebase SDK
- Firestore como base de datos
- CORS
- ESM (ECMAScript Modules)
- Dotenv para variables de entorno


## 📁 Estructura del proyecto

src/
├── controllers/ 
│ └── products.controller.js 
├── services/ 
│ └── products.service.js 
├── models/ 
│ ├── products.model.js 
│ └── data.js
├── routes/ 
│ └── products.router.js index.js


## 🧠 Arquitectura

- **Controladores**: manejan las peticiones HTTP y delegan la lógica.
- **Servicios**: contienen la lógica de negocio y validaciones.
- **Modelos**: interactúan con Firebase Firestore para leer, crear, modificar o eliminar documentos.


## 📡 Endpoints disponibles

| Método | Ruta                         | Descripción                          |
|--------|------------------------------|--------------------------------------|
| GET    | `/api/products`              | Obtener todos los productos          |
| GET    | `/api/products/:id`          | Obtener un producto por su ID        |
| GET    | `/api/products/search?name=` | Buscar productos por nombre          |
| POST   | `/api/products`              | Crear un nuevo producto              |
| PUT    | `/api/products/:id`          | Actualizar un producto existente     |
| DELETE | `/api/products/:id`          | Eliminar un producto por su ID       |

## 📦 Formato de producto

```JSON
{
  "name": "Campera impermeable",
  "price": 12000,
  "categories": ["ropa", "paraguas"]
}
```
🔐 El campo id se genera automáticamente por Firestore o puede ser especificado en operaciones PUT.

## ▶️ Configuración Firebase

Agregá tu archivo .env con las siguientes variables:
```shell
FIREBASE_API_KEY=xxx
FIREBASE_AUTH_DOMAIN=xxx
FIREBASE_PROJECT_ID=xxx
FIREBASE_STORAGE_BUCKET=xxx
FIREBASE_MESSAGING_SENDER_ID=xxx
FIREBASE_APP_ID=xxx
FIREBASE_MEASUREMENT_ID=xxx
```
Tu archivo data.js toma estas variables para iniciar la app de Firebase.

## ▶️ Cómo ejecutar el proyecto

- 1. Cloná el repositorio:
```shell
git clone https://github.com/tuusuario/api-productos-node.git
cd api-productos-node
```

- 2. Instalá las dependencias:
```shell
npm install
```

- 3. Ejecutá el servidor en modo desarrollo:
```shell
npm run dev
```

- 4. Accedé a la API:
```shell
http://localhost:3000/api/products
```

## ✍️ Autor
Federico Maciel Proyecto final - Talento Tech Node.js 2025