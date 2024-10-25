import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css'; 
const BuyButton = ({product}) =>{

    const handleBuyButton=()=>{
        console.log("Producto añadido");
        console.log(product);
        Toastify({
            text: "Producto añadido al carrito correctamente.",
            duration:2000,
            close:true,
            gravity:"top",
            position:"right",
            backgroundColor:"#397B57",
            style:{
                color:"white"
            }
        }).showToast()
    }
    return(
        <button className="buy-btn" onClick={handleBuyButton}> 
            Añadir al carrito 
        </button>
    )
}
export default BuyButton