import useProducts from "../../hooks/useProducts";
import ItemList from "./ItemList";
import Loader from "../../common/Loader";
import hocFilterProducts from "../../hoc/HocFilterProducts";

const ItemListContainer = ({ products }) => {
  const {  loading } = useProducts();


  if (loading) {
    return (
      <div className="item-list-container loading-container">
        <Loader />
      </div>
    );
  }

  return (
    
      <ItemList productos={products} />

  );
};

const ItemListContainerWithHoc = hocFilterProducts(ItemListContainer)
export default ItemListContainerWithHoc
