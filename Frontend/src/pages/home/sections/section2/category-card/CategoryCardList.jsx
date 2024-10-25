import React from "react";
import useCategories from "../../../../../hooks/useCategories";
import CategoryCard from './CategoryCard';


const CategoryCardList = ()=>{
    const {categories} = useCategories();
    
    return(
        <div className="category-list">
            <CategoryCard categories={categories} ></CategoryCard>
        </div>
    )
}
export default CategoryCardList