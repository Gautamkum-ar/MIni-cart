import { useContext } from "react";
import { ProductContext } from "../contexts/Context";

export const Filter = () => {
  const { handleCheckBox, handleFilterBox } = useContext(ProductContext);
  return (
    <section className="filter_box">
      <fieldset>
        <button className="close__btn" onClick={() => handleFilterBox()}>
          X
        </button>
        <legend>
          <h2>FILTERS: </h2>
        </legend>

        <p className="head_filter">Filter by Price:</p>
        <label htmlFor="input">
          Price-Low To High
          <input
            type="checkbox"
            value="Price-Low To High"
            onChange={(e) => handleCheckBox(e)}
          />
        </label>
        <label htmlFor="input">
          Price-High to Low
          <input
            type="checkbox"
            value="Price-High to Low"
            onChange={(e) => handleCheckBox(e)}
          />
        </label>
        <p className="head_filter">Filter by Category:</p>

        <label>
          Smartphones
          <input
            type="checkbox"
            value="smartphones"
            onChange={(e) => handleCheckBox(e)}
          />
        </label>
        <label>
          Laptop
          <input
            type="checkbox"
            value="laptops"
            onChange={(e) => handleCheckBox(e)}
          />
        </label>
        <label>
          Groceries
          <input
            type="checkbox"
            value="groceries"
            onChange={(e) => handleCheckBox(e)}
          />
        </label>
        <label>
          Fragrances
          <input
            type="checkbox"
            value="fragrances"
            onChange={(e) => handleCheckBox(e)}
          />
        </label>
        <label>
          Home-Decoration
          <input
            type="checkbox"
            value="home-decoration"
            onChange={(e) => handleCheckBox(e)}
          />
        </label>
        <label>
          Skin-Care
          <input
            type="checkbox"
            value="skincare"
            onChange={(e) => handleCheckBox(e)}
          />
        </label>
        <button className="clear__filter">Clear Filter</button>
      </fieldset>
    </section>
  );
};
