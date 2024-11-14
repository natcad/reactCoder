import { useEffect, useState } from "react";
import { getCategories } from "../utils/FetchApi";
const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const[loading,setLoading]=useState(true);
  useEffect(() => {
    setLoading(true);
    getCategories()
      .then((data) => {
        setCategories(data);
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

  return { categories, loading };};

export default useCategories;