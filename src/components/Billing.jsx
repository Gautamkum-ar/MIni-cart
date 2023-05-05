import { useContext } from "react";
import { ProductContext } from "../contexts/Context";
import { Link } from "react-router-dom";

export const BillingComonent = () => {
  const { cartItem, totalItemInCart } = useContext(ProductContext);

  const subTotal = cartItem.reduce(
    (acc, { price, quantity, discountPercentage }) =>
      acc + (price - parseInt((price * discountPercentage) / 100)) * quantity,
    0
  );
  return (
    <>
      {cartItem.length > 0 && (
        <div className="product__billing">
          {" "}
          <h1>Total Item In Cart : {totalItemInCart} </h1>
          <h4>Subtotal: {subTotal}</h4>
          <p className="billing__head">
            <span>Name </span>
            <span>Qnty</span>
            <span>Discount</span>
            <span>Price</span>
          </p>
          {cartItem.map((elms) => (
            <div className="billing__sec">
              <p className="billing__head">
                <span>{elms.title} </span>
                <span>{elms.quantity}</span>
                <span>{elms.discountPercentage}%</span>
                <span>${elms.price * elms.quantity}</span>
              </p>
            </div>
          ))}
          <p className="billing__total">
            <span>Sub Total:</span>

            <span>
              {" "}
              $
              {cartItem.reduce(
                (acc, { quantity, price }) => acc + quantity * price,
                0
              )}{" "}
            </span>
          </p>
          <p className="billing__total">
            <span>Total Discount:</span>

            <span>
              {" "}
              - $
              {cartItem.reduce(
                (acc, { quantity, discountPercentage, price }) =>
                  acc + parseInt((price * discountPercentage) / 100) * quantity,
                0
              )}{" "}
            </span>
          </p>
          <p className="billing__total">
            <span>Total Payable Amount:</span>

            <span>${subTotal}</span>
          </p>
          <div className="buy_btn">
            <button className="buy">
              <Link to="/buy">Buy Now</Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
