import cart from "../../assets/images/icons/cart.svg";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <Link to="/cart">
        <img src={cart} alt="cart-widget" className="cart-img" />
      </Link>
    </div>
  );
};
export default CartWidget;
