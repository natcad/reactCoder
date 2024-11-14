import { createContext, useState, useEffect } from "react";

const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
  const addProductInCart = (newProduct) => {
    const tempCart = [...cart];
    const index = cart.findIndex(
      (productCart) => productCart.id === newProduct.id
    );
    if (index >= 0) {
      tempCart[index].quantity += newProduct.quantity;
      setCart(tempCart);
    } else {
      setCart([...cart, newProduct]);
    }
  };
  const deleteProductById = (idProduct) => {
    const productFilter = cart.filter(
      (productCart) => productCart.id !== idProduct
    );
    setCart(productFilter);
  };
  const deleteCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const totalQuantity = () => {
    const quantity = cart.reduce(
      (total, productCart) => total + productCart.quantity,
      0
    );
    return quantity;
  };

  const totalPrice = () => {
    const price = cart.reduce(
      (total, productCart) => total + productCart.quantity * productCart.precio,
      0
    );
    return price
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        addProductInCart,
        deleteProductById,
        deleteCart,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
export { cartContext, CartProvider };
