import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import { ProductContext } from "../contexts/Context";
import ImageSlider from "../components/imgSlider/ImgSlider";
import Loading from "../Ruko-Jara-Sabar-Karo.webp";

const SingleProduct = () => {
  const { datas, isLoading, handleCart, isPresentInCart } =
    useContext(ProductContext);
  const { productId } = useParams();

  const findItem = datas.find((item) => item.id.toString() === productId);
  console.log(findItem);

  if (isLoading) return <img className="loading" src={Loading} />;
  const {
    price,
    rating,
    title,
    discountPercentage,
    stock,
    description,
    category,
    id,
  } = findItem;
  return (
    <div className="single__page">
      <div className="product__details">
        <section className="images">
          <ImageSlider />
        </section>
        <section className="details__single">
          <h1>{title}</h1>
          <p className="rating">
            {rating}
            <FaStar />
          </p>
          <p className="off">Extra $30 Off</p>
          <p className="price">
            $ {price - parseInt((price * discountPercentage) / 100)}
            <span className="original"> {price} </span>{" "}
            <span className="disc">{discountPercentage}% off</span>
          </p>
          <p className="stock">Hurry only {stock} left!</p>
          <p className="cat">
            <b>Category: </b>
            {category}
          </p>
          <p className="des">
            <b>Description: </b>
            {description}
          </p>
          <div className="buttons">
            {" "}
            <button onClick={() => handleCart(findItem)}>
              {isPresentInCart(id) ? (
                <Link to="/cart">Go To Cart</Link>
              ) : (
                "Add to Cart"
              )}
            </button>
            <button>
              <Link to="/buy">Buy Now</Link>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SingleProduct;
