import * as model from '../models/products.model.js';

export const getAllProducts = async () => {
  return await model.getAllProducts();
};

export const searchProducts = async (nombre) => {
  const allProducts = await model.getAllProducts();
  return allProducts.filter(product =>
    product.name.toLowerCase().includes(nombre.toLowerCase())
  );
};

export const searchProductById = async (id) => {
  return await model.getProductsById(id);
}

export const createProduct = async ({ name, price, categories }) => {
  return await model.createProduct({ name, price, categories });
};

export const updateProductById = async (id, data) => {
  return await model.updateProductById(id, data);
};

export const deleteProductById = async (id) => {
  return await model.deleteProductById(id);
};