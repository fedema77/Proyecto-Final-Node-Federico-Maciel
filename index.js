import "dotenv/config";
import express from 'express';
import cors from 'cors';
import { auth } from './src/middleware.js/auth.middleware.js';
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>¡¡¡Hola API!!!</h1>');
  console.log(req.method, req.url);
});

import authRouter from './src/routes/auth.router.js';
app.use("/api", authRouter);

import productsRouter from './src/routes/products.router.js';
app.use("/api", auth, productsRouter);

app.use((req, res) => {
  res.status(404).json('Ruta no encontrada');
  console.log(req.method, req.url);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});