import "./App.css";
import "./components/imgSlider/Style.css";
import "./components/filterStyle.css";
import "./pages/Responsive.css";
import "./components/toast/toastStyle.css";

import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";

import { Cart } from "./pages/Cart";
import { WishList } from "./pages/WishList";

import SingleProduct from "./pages/SingleProduct";
import { Buy } from "./pages/Buy";
import { Landing } from "./pages/Landing";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
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
