import { useContext, useState } from "react";
import { ProductContext } from "../contexts/Context";
import { FaFilter } from "react-icons/fa";

export const Filter = () => {
  const { handleCheckBox, handleFilterBox, handleRemoveFilter } =
    useContext(ProductContext);

  const category = [
    "smartphones",
    "laptops",
    "groceries",
    "fragrances",
    "home-decoration",
    "skincare",
  ];

  return (
    <section className="filter_box">
      <span className="icon">
        <FaFilter />
      </span>
      <button className="close__btn" onClick={() => handleFilterBox()}>
        X
      </button>

      <p className="head_filter">Filter by Price:</p>

      <label htmlFor="input">
        Price-Low To High
        <input
          type="radio"
          name="price"
          value="Price-Low To High"
          onChange={(e) => handleCheckBox(e)}
        />
      </label>
      <label htmlFor="input">
        Price-High to Low
        <input
          type="radio"
          name="price"
          value="Price-High to Low"
          onChange={(e) => handleCheckBox(e)}
        />
      </label>
      <p className="head_filter">Filter by Category:</p>
      {category.map((elms) => (
        <label key={elms}>
          {" "}
          {elms}
          <input type="checkbox" value={elms} onChange={handleCheckBox} />
        </label>
      ))}
      <button onClick={handleRemoveFilter} className="clear__filter">
        Clear Filter
      </button>
    </section>
  );
};
