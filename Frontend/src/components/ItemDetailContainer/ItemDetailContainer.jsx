
import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import Loader from "../../common/Loader";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () =>{
    const { products, loading  } =useProducts();
    const {  idProduct } = useParams();

    const findProduct = products.find((p) => p.id == idProduct);
    
    
    if (loading) {
        return <Loader/>; 
    }

    if (!findProduct) {
        return <div>Producto no encontrado.</div>;
    }

    return(
        <ItemDetail product={findProduct}/>
    )
}   
export default ItemDetailContainer