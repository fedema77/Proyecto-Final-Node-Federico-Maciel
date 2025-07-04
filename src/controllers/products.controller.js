import * as service from '../services/products.services.js';

export const getAllProducts = (req, res) => {
    res.json(service.getAllProducts());
};

export const searchProducts = (req, res) => {
  const { nombre } = req.query;

  if (!nombre) {
    return res.status(400).json({ error: "Falta el parámetro 'nombre' en la query" });
  }

  const results = service.searchProducts(nombre);
  res.json(results);
}

export const searchProductById = (req, res) => {
  const productId = parseInt(req.params.id);
  const product = service.searchProductById(productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Producto no encontrado');
  }
  console.log(req.method, req.url);
}

export const createProduct = ((req, res) => {
  const { name, price, categories } = req.body;
  const newProduct = service.createProduct({ name, price, categories });
  res.status(201).json(newProduct);
});

export const updateProductById = (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const { name, price, categories } = req.body;
  const productIndex = service.updateProductById(productId, { name, price, categories });

  if (productIndex) {
    res.json(productIndex);
  } else {
    res.status(404).send('Producto no encontrado');
  }
}

export const deleteProductById = (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const product = service.deleteProductById(productId);
  if (product) {
    res.status(204).send();
  } else {
    res.status(404).send('Producto no encontrado');
  }  
}