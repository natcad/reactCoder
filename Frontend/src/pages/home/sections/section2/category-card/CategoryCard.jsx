import React from 'react';
import HoverLink from './HoverLink';
const CategoryCard = ({categories})=>{
  
    return(
        <div className="category-card-container">
            {categories.map((category)=>(
                <div key={category.id} className={`category ${category.id % 2 === 0 ? 'right' : 'left'}`}>
                    <div className="category-img-container">
                        <img src={category.image} alt={category.title} className="category-img" />
                    </div>
                    <div className={`category-content ${category.id % 2 === 0 ? 'right' : 'left'}`}>
                        <h2 className='category-title'>{category.title}</h2>
                        <p className='category-description'>{category.description}</p>
                        <HoverLink categoria={category.title}/>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default CategoryCard;