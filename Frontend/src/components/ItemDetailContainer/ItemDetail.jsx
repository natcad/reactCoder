import { useState } from "react";
import BuyButton from "../../common/BuyButton";
import ProductCounter from "../../common/ProductCounter";
import Drop from "../../assets/images/icons/drop.svg";
import Shovel from "../../assets/images/icons/shovel.svg";
import Sun from "../../assets/images/icons/sun.svg";
import { cartContext } from "../../context/CartContext";
import { useContext } from "react";
const ItemDetail = ({ product }) => {
  const [currrentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addProductInCart } = useContext(cartContext);
  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? product.imagen.length - 1 : prevIndex - 1
    );
  };

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === product.imagen.length - 1 ? 0 : prevIndex + 1
    );
  };
  const addProduct = () => {
    const productCart = { ...product, quantity: quantity };
    addProductInCart(productCart);
  };

  return (
    <div className="item-detail">
      <div className="images-detail-container">
        <div className="carrousel">
          <button onClick={handleClickPrev} className="carrousel-btn">
            &lt;
          </button>
          <div className="main-image">
            <img src={product.imagen[currrentIndex]} alt={product.nombre} />
          </div>
          <button onClick={handleClickNext} className="carrousel-btn">
            &gt;
          </button>
        </div>
      </div>
      <div className="detail-info-container">
        <div className="detail-text">
          <h2>{product.nombre}</h2>
          <h3>${product.precio}</h3>
          <p>{product.descripcion}</p>
        </div>
        {product.stock > 0 ? (
          <div className="buy-container">
            <ProductCounter stock={product.stock} setQuantity={setQuantity} />
            <BuyButton handleAddProduct={addProduct} />
          </div>
        ) : (
          <div className="buy-container">
            <p>No hay stock disponible</p>
          </div>
        )}
        <div className="more-info">
          <div>
            <div className="image-container">
              <img src={Drop} alt="Cantidad de agua:" />
              <span className="alt">Cantidad de agua:</span>
            </div>
            <p>{product.cantidad_agua}</p>
          </div>
          <div>
            <div className="image-container">
              <img src={Sun} alt="Cantidad de sol:" />
              <span className="alt">Cantidad de sol:</span>
            </div>
            <p>{product.cantidad_sol}</p>
          </div>
          <div>
            <div className="image-container">
              <img src={Shovel} alt="Dificultad de cuidado:" />
              <span className="alt">Dificultad de cuidado:</span>
            </div>
            <p>{product.dificultad_cuidado}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
