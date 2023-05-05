import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../contexts/Context";
import { useParams } from "react-router-dom";

const ImageSlider = () => {
  const { datas } = useContext(ProductContext);
  const { productId } = useParams();
  const [count, setcount] = useState(0);

  const findItem = datas.find((item) => item.id.toString() === productId);
  const [image, setImage] = useState(findItem.images[count]);

  useEffect(() => {
    setImage(findItem.images[count]);
  }, [count]);

  const handleNextButton = () => {
    const totalImage = findItem.images.length;
    if (count === totalImage - 1) {
      setcount(0);
    } else {
      setcount(count + 1);
    }
  };

  const handlePrevButton = () => {
    const totalImage = findItem.images.length;
    if (count === 0) {
      setcount(totalImage - 1);
    } else {
      setcount(count - 1);
    }
  };
  return (
    <div className="img__container">
      <div onClick={handlePrevButton} className="prev__btn">
        {" "}
        &laquo;
      </div>
      <img className="image" src={image} alt={findItem.title} />
      <div onClick={handleNextButton} className="next__btn">
        {" "}
        &raquo;
      </div>
    </div>
  );
};

export default ImageSlider;
