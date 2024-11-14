import { getDoc, getDocs, collection, doc } from "firebase/firestore";
import db from "../../db/db.js";

const getProducts = () => {
    const productsRef = collection(db, "productos");
    return getDocs(productsRef).then((dataDb) => {
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
      return data; 
    });
  };
  
const getProductById = (idProduct) => {
  const productsRef = doc(db, "productos", idProduct);
  getDoc(productsRef).then((dataDb) => {
    return { id: dataDb.id, ...dataDb.data() };
  });
};

const getCategories = () => {
    const categoryRef = collection(db, "categorias");
    return getDocs(categoryRef).then((dataDb) => {
      const data = dataDb.docs.map((categoryDb) => {
        return { id: categoryDb.id, ...categoryDb.data() };
      });
      return data; 
    });
  };
  
const getCategoriesById = (idCategory) => {
    const categoryRef = doc(db, "categorias", idCategory);
    getDoc(categoryRef).then((dataDb) => {
      return { id: dataDb.id, ...dataDb.data() };
    });
};
export {
  getProducts,
  getProductById,
  getCategories,
  getCategoriesById,
};
