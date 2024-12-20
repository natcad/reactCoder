import useProducts from "../hooks/useProducts";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Lupa from "../assets/images/icons/lupa.svg";

const hocFilterProducts = (Component) => {
  return function () {
    const { products } = useProducts();
    const [query, setQuery] = useState("");
    const { categoria } = useParams();

    const filteredProducts = products.filter((product) => {
      const matchCategoria =
        categoria && product.categoria && Array.isArray(product.categoria)
          ? product.categoria.some((cat) =>
              cat.toLowerCase().includes(categoria.toLowerCase())
            )
          : true;

      const matchQuery =
        product.nombre && product.nombre.toLowerCase
          ? product.nombre.toLowerCase().includes(query.toLowerCase())
          : false;

      return matchCategoria && matchQuery;
    });


    const changeInput = (event) => {
      setQuery(event.target.value.toLowerCase());
    };

    return (
      <div className="right-container">
        <div className="search-container">
          <img src={Lupa} alt="Buscar" className="search-icon"></img>
          <input
            type="text"
            onChange={changeInput}
            className="search-input"
            placeholder="Buscar"
          />
        </div>
        <div className="item-list-container">
          <Component products={filteredProducts} />
        </div>
      </div>
    );
  };
};
export default hocFilterProducts;
