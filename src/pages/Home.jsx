import { useContext } from "react";
import { FaFilter, FaHeart } from "react-icons/fa";

import { ProductContext } from "../contexts/Context";
import { Filter } from "../components/Filters";
import { Link } from "react-router-dom";

import Load from "../Ruko-Jara-Sabar-Karo.webp";
import { Toast } from "../components/toast/Toast";

export const Home = () => {
  const {
    handleCart,
    handleSorting,
    isPresentInCart,
    isPresentInwishlist,
    handleWishList,
    handleRemoveFromWish,
    isLoading,
    filterBox,
    handleFilterBox,
    setUserInput,
    handleToaster,
    handleWishToaster,
  } = useContext(ProductContext);

  const data = handleSorting();

  if (isLoading) return <img className="loading" src={Load} />;

  return (
    <div className="home_page">
      {handleToaster && <Toast where="Cart" func="Added to" />}
      {handleWishToaster && <Toast where="WishList" func="Added to" />}
      <label className="search__label__mob">
        <input
          onChange={(e) => setUserInput(e.target.value)}
          type="text"
          placeholder="Search by name.."
          className="search_input__mob"
        />
      </label>
      <div className="product__main">
        {filterBox === true ? (
          <Filter />
        ) : (
          <button className="filterBoxToggle" onClick={() => handleFilterBox()}>
            <FaFilter />
          </button>
        )}

        <section className="product_list">
          {data.map((item) => {
            const { discountPercentage, id, price, thumbnail, title } = item;
            return (
              <div key={id} className="product_card">
                <section className="product_img">
                  {isPresentInwishlist(id) ? (
                    <p className="wish__icon1">
                      {" "}
                      <FaHeart onClick={() => handleRemoveFromWish(id)} />
                    </p>
                  ) : (
                    <p className="wish__icon">
                      {" "}
                      <FaHeart onClick={() => handleWishList(item)} />
                    </p>
                  )}
                  <img src={thumbnail} alt={title} />
                </section>
                <section className="product_description">
                  <h4>{title.slice(0, 16)}</h4>
                  <p>
                    {" "}
                    Price: $
                    {parseInt(price - (price * discountPercentage) / 100)}{" "}
                    <span className="original_price">${price}</span>
                  </p>
                  <p> Discount: {discountPercentage}%</p>
                  <div className="btns">
                    <Link to={`/single/${id}`}>View Details</Link>{" "}
                    <button onClick={() => handleCart(item)}>
                      {isPresentInCart(id) ? (
                        <Link to="/cart">Go To Cart</Link>
                      ) : (
                        "Add to Cart"
                      )}
                    </button>{" "}
                  </div>
                </section>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};
