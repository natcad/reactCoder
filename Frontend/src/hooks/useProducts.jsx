import { useEffect, useState } from "react";
import { getProducts } from "../utils/FetchApi";
const useProducts = () => {
  const [products, setProducts] = useState([]);
  const[loading,setLoading]=useState(true);
 
  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      })
      .finally(() => {
        console.log("finalizo la promesa");
      });
  }, []);

  return { products, loading };};

export default useProducts;