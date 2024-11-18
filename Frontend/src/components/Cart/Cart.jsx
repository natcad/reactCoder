import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalPrice, deleteCart, deleteProductById } =
    useContext(cartContext);
  return (
    <div
      className="cart-page"
      style={{
        backgroundImage: "url('/images/background/background.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {cart.length <= 0 ? (
        <div className="empty-cart">
          <h2>Oops aún no has agregado productos en el carrito</h2>
          <FontAwesomeIcon icon={faCartShopping} className="cart-svg" />
          <Link to="/our-products"> Seguir Comprando</Link>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-content">
            <div className="cart-content__header">
              <h2>Resumen de compra</h2>
              <button onClick={deleteCart}>Eliminar carrito</button>
            </div>
            <div>
              {cart.map((productCart, index) => (
                <div key={index} className="cart-item">
                  <div className="cart-item__info">
                    <div className="cart-item__info--img">
                      <img
                        src={productCart.imagen[0]}
                        alt={productCart.nombre}
                      />
                    </div>
                    <div className="cart-item__info--text">
                      <h3>{productCart.nombre}</h3>
                      <p>Cantidad: {productCart.quantity}</p>
                      <p>${productCart.precio * productCart.quantity}</p>
                    </div>
                  </div>
                  <div className="cart-item__button">
                    <button onClick={() => deleteProductById(productCart.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cart-price-container">
            <div className="cart-price">
              <div className="cart-price__text">
                <p>Subtotal:</p>
                <p>Impuestos:</p>
                <p className="total">Total:</p>
              </div>
              <div className="cart-price__info">
                <p>${totalPrice()}</p>
                <p>${(totalPrice() * 0.21).toFixed(2)}</p>
                <p className="total">
                  ${(totalPrice() + totalPrice() * 0.21).toFixed(2)}
                </p>
              </div>
            </div>

            <Link to="/checkout">Terminar Compra</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
