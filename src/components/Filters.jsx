import { useContext } from "react";
import { ProductContext } from "../contexts/Context";

export const Filter = () => {
  const { handleCheckBox, handleFilterBox, handleRemoveFilter } =
    useContext(ProductContext);
  return (
    <section className="filter_box">
      <button className="close__btn" onClick={() => handleFilterBox()}>
        X
      </button>

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
      <button onClick={handleRemoveFilter} className="clear__filter">
        Clear Filter
      </button>
    </section>
  );
};
