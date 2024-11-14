import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import Loader from "../../common/Loader";
import ItemDetail from "./ItemDetail";
import ProductCard from "./ProductCard";
const ItemDetailContainer = () => {
  const { products, loading } = useProducts();
  const { idProduct } = useParams();

  const findProduct = products.find((p) => p.id == idProduct);

  const randomProducts = products
    .filter((product) => product.id !== idProduct)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
  if (loading) {
    return (
      <div className="item-detail loading-container">
        <Loader />
      </div>
    );
  }

  if (!findProduct) {
    return <div>Producto no encontrado.</div>;
  }

  return (
    <>
      <ItemDetail product={findProduct} />

      <div className="related-products">
        <h3>También te puede gustar</h3>
        <div className="related-products-container">
          {randomProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};
export default ItemDetailContainer;
