import useCategories from "../../hooks/useCategories";
import React, { useState, useEffect } from "react";
import CategoryList from "./CategoryList";
const CategoryListContainer = ({onCategoryChange}) => {
  const {categories} = useCategories();

  return (
    <div className="category-list-container">
      <CategoryList categorias={categories} onCategoryChange={onCategoryChange} />
    </div>
  );
};
export default CategoryListContainer;
