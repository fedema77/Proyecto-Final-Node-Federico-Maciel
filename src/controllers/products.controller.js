import * as service from '../services/products.services.js';

export const getAllProducts = async (req, res) => {
    res.json(await service.getAllProducts());
};

export const searchProducts = async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "Falta el parámetro 'name' en la query" });
  }

  const results = await service.searchProducts(name);
  res.json(results);
}

export const searchProductById = async (req, res) => {
  const productId = req.params.id;
  const product = await service.searchProductById(productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Producto no encontrado');
  }
}

export const createProduct = (async (req, res) => {
  const { name, price, categories } = req.body;
  const newProduct = await service.createProduct({ name, price, categories });
  res.status(201).json(newProduct);
});

export const updateProductById = async (req, res) => {
  const productId = req.params.id;
  const { name, price, categories } = req.body;
  const updatedProduct = await service.updateProductById(productId, { name, price, categories });

  if (updatedProduct) {
    res.json(updatedProduct);
  } else {
    res.status(404).send('Producto no encontrado o no se pudo actualizar');
  }
}

export const deleteProductById = async (req, res) => {
  const productId = req.params.id;
  const product = await service.deleteProductById(productId);
  if (product) {
    res.status(204).send();
  } else {
    res.status(404).send('Producto no encontrado');
  }  
}