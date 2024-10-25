import { NavLink } from "react-router-dom";

const Category = ({ id, categoria}) => {
  return (
    <li className="category-item" key={id}>
      <NavLink
        to={`/our-products/${categoria.toLowerCase()}`}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        {categoria}
      </NavLink>
    </li>
  );
};
export default Category;
