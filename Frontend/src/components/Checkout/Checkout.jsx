import { useState, useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import db from "../../../db/db";
import { Link } from "react-router-dom";
import validateForm from "../../utils/validateForm.js";
import { toast } from "react-toastify";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",  
    phone: "",     
    email: "",     
    address: "",   
    city: "",      
    country: "",   
    paymentMethod: "", 
  });
  const { cart, totalPrice, deleteCart } = useContext(cartContext);

  const [idOrder, setIdOrder] = useState(null);

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const order = {
      buyer: { ...dataForm },
      products: { ...cart },
      date: Timestamp.fromDate(new Date()),
      total: totalPrice(),
    };
    const response = await validateForm(dataForm);


    if (response.status === "success") {
      uploadOrder(order);
    } else {
      toast.error(response.message);
    }
  };

  const uploadOrder = (newOrder) => {
    const orderRef = collection(db, "orders");
    addDoc(orderRef, newOrder)
      .then((response) => {
        console.log("Order uploaded:", response); // Debugging order upload
        setIdOrder(response.id);
      })
      .finally(() => {
        deleteCart();
      });
  };

  return (
    <div
      className="background"
      style={{
        backgroundImage: "url('/images/background/background.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {idOrder == null ? (
        <div className="checkout-container">
          <h2>Finalizar compra</h2>
          <form onSubmit={handleSubmit}>
            <div className="input">
              <label htmlFor="fullname">Nombre:</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={dataForm.fullname}
                onChange={handleChangeInput}
                placeholder="Nombre"
              />
            </div>
  
            <div className="input">
              <label htmlFor="phone">Teléfono:</label>
              <input
                type="number"
                id="phone"
                name="phone"
                value={dataForm.phone}
                onChange={handleChangeInput}
                placeholder="Teléfono"
              />
            </div>
  
            <div className="input">
              <label htmlFor="email">Correo electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={dataForm.email}
                onChange={handleChangeInput}
                placeholder="Correo"
              />
            </div>
  
            <div className="input">
              <label htmlFor="address">Dirección de envío:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={dataForm.address}
                onChange={handleChangeInput}
                placeholder="Dirección"
              />
            </div>
  
            <div className="input">
              <label htmlFor="city">Ciudad:</label>
              <input
                type="text"
                id="city"
                name="city"
                value={dataForm.city}
                onChange={handleChangeInput}
                placeholder="Ciudad"
              />
            </div>
  
            <div className="input">
              <label htmlFor="country">País:</label>
              <input
                type="text"
                id="country"
                name="country"
                value={dataForm.country}
                onChange={handleChangeInput}
                placeholder="País"
              />
            </div>
  
            <div className="input">
              <label htmlFor="paymentMethod">Método de pago:</label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={dataForm.paymentMethod}
                onChange={handleChangeInput}
              >
                <option value="">Selecciona un método</option>
                <option value="creditCard">Tarjeta de Crédito</option>
                <option value="paypal">PayPal</option>
                <option value="bankTransfer">Transferencia Bancaria</option>
              </select>
            </div>
  
            <button type="submit">Terminar Compra</button>
          </form>
        </div>
      ) : (
        <div className="thank">
          <h2>Gracias por tu compra</h2>
          <p>Su número de compra es: {idOrder}</p>
          <Link to="/our-products">Seguir comprando</Link>
        </div>
      )}
    </div>
  );
  
};

export default Checkout;
