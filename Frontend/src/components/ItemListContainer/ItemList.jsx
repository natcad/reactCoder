import Item from "./Item"
const ItemList =({productos})=>{
    return(
        <div className="product-item">
            {productos.map((producto)=>(
                <Item product={producto}/>
            ))}    
        </div>
    )
}
export default ItemList