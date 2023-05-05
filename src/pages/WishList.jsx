import { useContext } from "react";
import { ProductContext } from "../contexts/Context";

import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const WishList = () => {
  const {
    wishlist,
    isPresentInwishlist,
    handleWishList,
    handleRemoveFromWish,
  } = useContext(ProductContext);

  return (
    <div className="wishlist__page">
      {wishlist?.length === 0 ? (
        <p className="cart__noItems">
          <span>You have no Wishlist item </span>
          <Link to="/"> Go to Home Page..</Link>
        </p>
      ) : (
        <>
          {" "}
          <h1>Your total Wishlist items: {wishlist.length}</h1>
          <div className="wishlist__container">
            {wishlist.map((item) => {
              const { stock, rating, id, price, thumbnail, title } = item;
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
                    <h4>{title}</h4>
                    <p> Price: {price}</p>
                    <p>Rating: {rating}</p>
                    <p>In Stock: {stock}</p>
                  </section>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
