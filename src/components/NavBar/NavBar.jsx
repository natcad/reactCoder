import CartWidget from "./CartWidget";
import logo from '../../assets/images/logo/logo.svg';
const NavBar = () => {
  return (
    <nav>
      <img src={logo} className='logo-img' alt="Botanical"/>
      <div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Our products</a>
          </li>
          <li>
             <a href="#">About us</a></li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
          <CartWidget />
          </li>
        </ul>
        
      </div>
      
    </nav>
  );
};
export default NavBar;
