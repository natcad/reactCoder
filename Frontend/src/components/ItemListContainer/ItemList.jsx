import Item from "./Item"
const ItemList =({productos})=>{
    return(
        <div className="product-item">
            {productos.map((producto)=>(
                <Item key={producto.id} product={producto}/>
            ))}    
        </div>
    )
}
export default ItemList