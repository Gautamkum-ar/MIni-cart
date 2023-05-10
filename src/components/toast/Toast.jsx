import { useContext } from "react";
import { ProductContext } from "../../contexts/Context";

export const Toast = ({ where, func }) => {
  const { handleClosetoaster } = useContext(ProductContext);
  return (
    <div className="toast__container">
      <div className="toast">
        {func} your {where}{" "}
      </div>
      <button className="clz__btn" onClick={handleClosetoaster}>
        X
      </button>
    </div>
  );
};
