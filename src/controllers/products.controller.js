import * as service from '../services/products.service.js';

export const getAllProducts = (req, res) => {
    res.json(service.getAllProducts());
};

export const searchProducts = (req, res) => {
  const { nombre } = req.query;
  const filteredProducts = products.filter(p => p.nombre.toLowerCase().includes(nombre.toLowerCase()));
  res.json(filteredProducts);
  console.log(req.method, req.url);
}

export const searchProductById = (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Producto no encontrado');
  }
  console.log(req.method, req.url);
}

export const createProduct = (req, res) => {
  const { name, price } = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    price
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
}

export const updateProductById = (req, res) => {
  const productId = parseInt(req.params.id);
  const { name, price } = req.body;
  const productIndex = products.findIndex(p => p.id === productId);

  if (productIndex !== -1) {
    products[productIndex] = { id: productId, name, price };
    res.json(products[productIndex]);
  } else {
    res.status(404).send('Producto no encontrado');
  }
}

export const deleteProductById = (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === productId);

  if (productIndex !== -1) {
    products.splice(productIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Producto no encontrado');
  }
}