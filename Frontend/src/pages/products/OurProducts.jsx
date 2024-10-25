import CategoryListContainer from "../../components/CategoryListContainer/CategoryListContainer";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Banner from "./Banner";
import React, { useState } from "react";
const OurProducts = () => {
   const [selectedCategory, setSelectedCategory] = useState("Todos los Productos");
   const handleCategoryChange = (category) => {
      setSelectedCategory(category);  
      console.log("seleccionaste" + category)
   };
  return (
    <div className="our-products">
      <Banner />
      <h1>Nuestras plantas</h1>
      <div className="products-container">
        <CategoryListContainer onCategoryChange={handleCategoryChange} />
        <ItemListContainer  />
      </div>
    </div>
  );
};

export default OurProducts;
