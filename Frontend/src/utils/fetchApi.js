const getProducts = () => {
  return fetch("http://localhost:4000/productos")
    .then((response) => response.json())
    .catch((error) => console.error(error));
};
const getProductById = (idProduct) =>{
    return fetch(`http://localhost:4000/productos/${idProduct}`)
    .then ((response)=>response.json())
    .catch((error) => console.error(error))
}

const addProduct = (newProduct) =>{
    return fetch("http://localhost:4000/productos", {
        method:"POST",
        headers: {'COntent-Type': 'application/json'},
        body: JSON.stringify(newProduct)
    })
    .then((response)=>response.json())
    .catch((error) => console.error(error))
}

const modProduct = (idProduct, mod) =>{
    return fetch( `http://localhost:4000/productos/${idProduct}`,{
        method: "PUT",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(mod)
    })
    .then((response)=>response.json())
    .catch((error)=>console.error(error))
}

const deleteProduct =(idProduct)=>{
    return fetch(`http://localhost:4000/productos/${idProduct}`,{
        method: "DELETE"
    })
    .then((response)=>response.json())
    .catch((error)=>console.error(error))
}

const getCategories=()=>{
    return fetch("http://localhost:4000/categorias")
    .then((response)=>response.json())
    .catch((error)=>console.error(error))
}
const getCategoriesById=(idCategory)=>{
    return fetch(`http://localhost:4000/categorias/${idCategory}`)
    .then((response)=>response.json())
    .catch((error)=>console.error(error))
}
export {getProducts,getProductById,addProduct,modProduct, deleteProduct, getCategories, getCategoriesById}
