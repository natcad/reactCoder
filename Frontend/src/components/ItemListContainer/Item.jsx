import BuyButton from "../../common/BuyButton";
import HeartWidget from "../../common/HeartWidget";
import { Link } from "react-router-dom";
const Item = ({ product }) => {
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
          <div className="btn-container">
            <BuyButton product={product} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Item;
