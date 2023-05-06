import "./App.css";
import "./components/imgSlider/Style.css";
import "./components/filterStyle.css";
import "./pages/Responsive.css";

import { Home } from "./pages/Home";
import { NavLink, Route, Routes } from "react-router-dom";
import { FaHeart, FaHome, FaShoppingCart } from "react-icons/fa";

import { Cart } from "./pages/Cart";
import { WishList } from "./pages/WishList";
import { useContext } from "react";
import { ProductContext } from "./contexts/Context";
import SingleProduct from "./pages/SingleProduct";
import { Buy } from "./pages/Buy";
import { Landing } from "./pages/Landing";

function App() {
  const { totalItemInCart, cartItem, wishlist } = useContext(ProductContext);

  const handleLink = ({ isActive }) => ({
    color: isActive ? "purple" : "",
  });
  return (
    <div className="App">
      <header className="nav_bar">
        <h1>Mini Mart</h1>
        <nav>
          <NavLink style={handleLink} to="/home">
            <FaHome />
          </NavLink>
          <NavLink style={handleLink} to="/cart">
            <p className="list_item">
              <FaShoppingCart />
              {cartItem.length > 0 && <span>{totalItemInCart}</span>}
            </p>
          </NavLink>
          <NavLink style={handleLink} to="/wishlist">
            <p className="list_item">
              <FaHeart />
              {wishlist.length > 0 && <span>{wishlist.length}</span>}
            </p>
          </NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/single/:productId" element={<SingleProduct />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
