import express, { Router } from "express";
import { getAllProducts, searchProducts, searchProductById, createProduct, updateProductById, deleteProductById } from "../controllers/products.controller.js";


const router = Router();

router.get('/products', getAllProducts);

router.get('products/search', searchProducts);

router.get('/products/:id', searchProductById);

router.post('/products', createProduct);

router.put('/products/:id', updateProductById);

router.delete('/products/:id', deleteProductById);

export default router;

