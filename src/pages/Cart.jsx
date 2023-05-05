import { useContext } from "react";
import { FaHeart, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BillingComonent } from "../components/Billing";
import { ProductContext } from "../contexts/Context";

export const Cart = () => {
  const {
    cartItem,

    handleRemoveFromCart,
    handleRemoveQuantityInCart,
    handleAddQuantityInCart,
    isPresentInwishlist,
    handleWishList,
  } = useContext(ProductContext);

  return (
    <div className="cart">
      {cartItem?.length === 0 ? (
        <p className="cart__noItems">
          <span>Your cart Has no Item, Why not You buy someThings </span>
          <Link to="/"> Go to Home Page..</Link>
        </p>
      ) : (
        <div className="cart_page">
          {cartItem?.map((item) => {
            const { discountPercentage, id, price, thumbnail, title } = item;
            return (
              <div key={id} className="product_card">
                <section className="product_img">
                  {isPresentInwishlist(id) ? (
                    <p className="wish__icon1">
                      {" "}
                      <FaHeart />
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
                    {price - parseInt((price * discountPercentage) / 100)}{" "}
                    <span className="original_price">${price}</span>
                  </p>
                  <p> Discount: {discountPercentage}%</p>
                  <Link to="/">View Details</Link>{" "}
                  <div className="cart__btns">
                    {" "}
                    <button
                      onClick={() =>
                        item.quantity > 1
                          ? handleRemoveQuantityInCart(id)
                          : handleRemoveFromCart(id)
                      }
                    >
                      -
                    </button>
                    <p className="quantity">{item.quantity}</p>
                    <button onClick={() => handleAddQuantityInCart(id)}>
                      +
                    </button>
                    <button
                      className="remove_btn"
                      onClick={() => handleRemoveFromCart(id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </section>
              </div>
            );
          })}
        </div>
      )}
      <BillingComonent />
    </div>
  );
};
