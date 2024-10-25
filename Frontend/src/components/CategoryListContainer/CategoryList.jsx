import Category from "./Category";
import { NavLink, useLocation  } from "react-router-dom";
const CategoryList = ({ categorias  }) => {
  const location = useLocation();
  return (
    <ul className="category-list">
      <li>
      <NavLink 
           to={`/our-products`}
          className={({ isActive }) => isActive && location.pathname === "/our-products" ? "active-link" : ""}
        
        >Todos los Productos</NavLink >
      </li>
      {categorias.map((categoria) => (
        <Category id={categoria.id} categoria={categoria.title}></Category>
      ))}
    </ul>
  );
};
export default CategoryList;
