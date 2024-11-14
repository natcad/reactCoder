import "./assets/styles/css/index.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import Home from "./pages/home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OurProducts from "./pages/products/OurProducts.jsx";
import ProductDetail from "./pages/productsDetail/ProductDetail.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Checkout from './components/Checkout/Checkout.jsx'
// import NotFound from './pages/NotFound';
// import About from './pages/About.jsx';
// import About from './pages/Cart.jsx';
// import About from './pages/Contact.jsx';
import { CartProvider } from "./context/CartContext.jsx";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-products" element={<OurProducts />} />
          <Route path="/detail/:idProduct" element={<ProductDetail />} />
          <Route path="/our-products/:categoria" element={<OurProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
         */}
        </Routes>

        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
