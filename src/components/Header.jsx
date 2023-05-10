import { NavLink } from "react-router-dom";
import { FaHeart, FaHome, FaShoppingCart } from "react-icons/fa";

import { useContext } from "react";
import { ProductContext } from "../contexts/Context";

export const Header = () => {
  const { totalItemInCart, cartItem, wishlist, setUserInput } =
    useContext(ProductContext);

  const handleLink = ({ isActive }) => ({
    color: isActive ? "purple" : "",
  });
  return (
    <header className="nav_bar">
      <h1>Mini Mart</h1>
      <label className="search__label">
        <input
          onChange={(e) => setUserInput(e.target.value)}
          type="text"
          placeholder="Search by name.."
          className="search_input"
        />
      </label>
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
  );
};
