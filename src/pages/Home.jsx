import { useContext } from "react";
import { FaHeart } from "react-icons/fa";

import { ProductContext } from "../contexts/Context";
import { Filter } from "../components/Filters";
import { Link } from "react-router-dom";

import Loading from "../Ruko-Jara-Sabar-Karo.webp";

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
  } = useContext(ProductContext);
  const data = handleSorting();

  if (isLoading) return <img className="loading" src={Loading} />;
  return (
    <div className="home_page">
      <label>
        <input
          onChange={(e) => setUserInput(e.target.value)}
          type="text"
          placeholder="Search by name.."
          className="search_input"
        />
      </label>
      <div className="product__main">
        {filterBox === false ? (
          <Filter />
        ) : (
          <button className="filterBoxToggle" onClick={() => handleFilterBox()}>
            Filters &raquo;
          </button>
        )}

        <section className="product_list">
          {data ? (
            <>
              {data.map((item) => {
                const { discountPercentage, id, price, thumbnail, title } =
                  item;
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
                        {parseInt(
                          price - (price * discountPercentage) / 100
                        )}{" "}
                        <span className="original_price">${price}</span>
                      </p>
                      <p> Discount: {discountPercentage}%</p>
                      {/* <p>Rating: {rating}⭐</p> */}
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
            </>
          ) : (
            <h1 className="data__Loading">Please Wait Data is Loading...</h1>
          )}
        </section>
      </div>
    </div>
  );
};
