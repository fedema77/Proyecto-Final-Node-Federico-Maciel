import * as model from '../models/products.model.js';

export const getAllProducts = () => {
  return model.getAllProducts();
};

export const searchProducts = (nombre) => {
  const allProducts = model.getAllProducts();
  return allProducts.filter(product =>
    product.name.toLowerCase().includes(nombre.toLowerCase())
  );
};

export const searchProductById = (id) => {
  return model.getProductsById(id);
}

export const createProduct = ({ name, price, categories }) => {
  return model.createProduct({ name, price, categories });
};

export const updateProductById = (id, data) => {
  return model.updateProductById(id, data);
};

export const deleteProductById = (id) => {
  return model.deleteProductById(id);
};