import BuyButton from "../../common/BuyButton";
import HeartWidget from "../../common/HeartWidget";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartContext";
import { useContext } from "react";
const Item = ({ product }) => {
  const { addProductInCart } = useContext(cartContext);
  const addProduct = () => {
    const productCart = { ...product, quantity: 1 };
    addProductInCart(productCart);
  };

  return (
    <>
      <div className="product-card" key={product.id}>
        <Link to={"/detail/" + product.id} className="product-img">
          <img src={product.imagen[0]} />
        </Link>
        <div className="product-info">
          <div className="card-title">
            <h2 className="product-title">{product.nombre} </h2>
            <HeartWidget />
          </div>
          <p>Precio: ${product.precio}</p>
          {product.stock>0? (<div className="btn-container">
            <BuyButton handleAddProduct={addProduct} />
          </div>):
          (<div className="btn-container"></div>)
          }
        </div>
      </div>
    </>
  );
};
export default Item;
