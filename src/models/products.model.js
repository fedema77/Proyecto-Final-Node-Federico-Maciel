import fs from 'fs';
import path from 'path';

// dirección del archivo JSON
const __dirname = import.meta.dirname;

const filePath = path.join(__dirname, '../models/products.json');

const json = fs.readFileSync(filePath, "utf-8");

const products = JSON.parse(json);

export const getAllProducts = () => {
  return products;
}

export const getProductsById = (id) => {
  return products.find(product => product.id === id);
}

export const createProduct = (data) => {
  const newProduct = {
    id: products.length + 1,
    ...data
  };

  products.push(newProduct);
  fs.writeFileSync(filePath, JSON.stringify(products));
  return newProduct;
}

export const updateProductById = (id, { name, price, categories }) => {
  const index = products.findIndex(product => product.id === id);

  if (index !== -1) {
    products[index] = { id, name, price, categories };
    fs.writeFileSync(filePath, JSON.stringify(products));
    return products[index];
  }

  return null;
};

export const deleteProductById = (id) => {
    const productIndex = products.findIndex(product => product.id === id);
    
    if (productIndex !== -1) {
        products.splice(productIndex, 1);
        return true;
    }
    return false;
};