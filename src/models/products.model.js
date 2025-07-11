import {db} from './data.js';
import {
    collection,
    doc,
    getDoc,
    getDocs,
    addDoc,
    deleteDoc,
    updateDoc
} from 'firebase/firestore';

const productsCollection = collection(db, 'products');

export const getAllProducts = async () => {
  try {
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error al obtener los productos:", error);
  }
}

export const getProductsById = async (id) => {
  try {
    const productRef = doc(db, 'products', id);
    const productSnapshot = await getDoc(productRef);
    return productSnapshot.exists() ? { id: productSnapshot.id, ...productSnapshot.data() } : null;
  } catch (error) {
    console.error("Error al obtener el producto por ID:", error);
  }
}

export const createProduct = async (data) => {
    try {
        const docRef = await addDoc(productsCollection, data);
        return { id: docRef.id, ...data };
    } catch (error) {
        console.error("Error al crear el producto:", error);
    }
}

export const updateProductById = async (id, data) => {
  if (typeof id !== 'string') {
    console.error("ID inválido:", id);
    return null;
  }

  try {
        const productRef = doc(db, 'products', String(id));
        await updateDoc(productRef, data);
        return { id, ...data };
  } catch (error) {
        console.error("Error al actualizar el producto:", error);
        return null;
  }
}

export const deleteProductById = async (id) => {
  try {
    const productRef = doc(db, 'products', id);
    const snapshot = await getDoc(productRef);
    if (!snapshot.exists()) {
      return false;
    }
    await deleteDoc(productRef);
    return true;
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
  }
}