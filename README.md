# 🛠 Proyecto Final Node.js - API de Productos

Este proyecto es una API RESTful desarrollada en Node.js para gestionar un catálogo de productos. Incluye autenticación con **JWT** mediante un identificador de usuario con email y contraseña. Los datos se almacenan en **Firestore**, la base de datos NoSQL de Firebase. El proyecto está desplegado en **Vercel** y accesible públicamente.

🔗 URL del proyecto: [API en Vercel](https://proyecto-final-node-federico-maciel.vercel.app)


## 🚀 Tecnologías utilizadas

- Node.js + Express
- Firebase SDK + Firestore
- Autenticación con JSON Web Tokens (JWT)
- CORS + Dotenv + ESM Modules
- Vercel para despliegue


## 🔐 Autenticación

El login se realiza mediante una ruta protegida que valida credenciales estáticas:

```js
const default_user = {
  id: 1,
  email: "jwt@jwt.com",
  password: "jwt100%"
};
```

## 📮 Endpoint de Login
| Método   |      Ruta      |  Descripción |
|----------|:--------------:|-------------:|
| POST |  /api/login | Genera un token JWT con email y password |

✅ Datos esperados en el body:
```
{
  "email": "jwt@jwt.com",
  "password": "jwt100%"
}
```

📦 Respuesta exitosa:
```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5..."
}
```
Este token se utiliza para acceder a las rutas protegidas. Se debe enviar en el header:
```
{
  Authorization: Bearer <token>
}
```
## 📁 Estructura del proyecto

```
src/
├── controllers/
│   ├── auth.controller.js
│   └── products.controller.js
├── middleware/
│   └── auth.middleware.js
├── services/
│   └── products.service.js
├── models/
│   ├── products.model.js
│   └── data.js
├── routes/
│   ├── auth.router.js
│   └── products.router.js
├── index.js
```

## 🧠 Arquitectura

- **Controladores**: manejan las peticiones HTTP y delegan la lógica.
- **Servicios**: contienen la lógica de negocio y validaciones.
- **Modelos**: interactúan con Firebase Firestore para leer, crear, modificar o eliminar documentos.


## 📡 Endpoints disponibles
Todas las rutas de productos requieren autenticación JWT:

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

## ▶️ Configuración de entorno

Agregá tu archivo .env con las siguientes variables:
```shell
FIREBASE_API_KEY=xxx
FIREBASE_AUTH_DOMAIN=xxx
FIREBASE_PROJECT_ID=xxx
FIREBASE_STORAGE_BUCKET=xxx
FIREBASE_MESSAGING_SENDER_ID=xxx
FIREBASE_APP_ID=xxx
FIREBASE_MEASUREMENT_ID=xxx
JWT_SECRET=tu_clave_secreta_para_jwt
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