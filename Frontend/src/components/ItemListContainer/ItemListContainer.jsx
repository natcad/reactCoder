import useProducts from "../../hooks/useProducts";
import ItemList from "./ItemList";
import Loader from "../../common/Loader";
import hocFilterProducts from "../../hoc/HocFilterProducts";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
const ItemListContainer = ({ products }) => {
  const { loading } = useProducts();
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setItems(products.slice(0, 10));
  }, [products]);
  const fetchMoreData = () => {
    if (items.length >= products.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setItems((prevItems) => [
        ...prevItems,
        ...products.slice(prevItems.length, prevItems.length + 10),
      ]);
    }, 1000);
  };
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && hasMore) {
      fetchMoreData();
    }
  }, [inView, hasMore]);

  if (loading) {
    return (
      <div className="item-list-container loading-container">
        <Loader />
      </div>
    );
  }

  return (
    <div className="item-list-container">
      <ItemList productos={items} />
      <div ref={ref} className="loading-trigger" />
      {hasMore && (
        <div className="item-list-container loading-container">
          <Loader />
        </div>
      )}
    </div>
  );
};

const ItemListContainerWithHoc = hocFilterProducts(ItemListContainer);
export default ItemListContainerWithHoc;
