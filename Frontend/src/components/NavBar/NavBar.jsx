import CartWidget from "./CartWidget";
import logo from "../../assets/images/logo/logo.svg";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <img src={logo} className="logo-img" alt="Botanical" />
      <div>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/our-products"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Our products
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contact
            </NavLink>
          </li> */}
          <li>
            <CartWidget />
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
