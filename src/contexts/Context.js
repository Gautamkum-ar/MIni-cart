import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();
const ContextProvider = ({ children }) => {
  const [datas, setData] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [checkboxes, setCheckboxes] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterBox, setFilterBox] = useState(false);
  const getData = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products");
      const response = await data.json();
      setData(response.products);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const handleFilterBox = () => {
    setFilterBox(!filterBox);
  };
  const handleCart = (item) => {
    const cart = cartItem.find(({ id }) => id === item.id);
    if (!cart) {
      setCartItem([...cartItem, { ...item, quantity: 1 }]);
    } else {
      setCartItem([...cartItem]);
    }
  };
  const handleRemoveFromCart = (id) => {
    setCartItem(cartItem.filter((elms) => elms.id !== id));
  };
  const handleRemoveFromWish = (id) => {
    setWishlist(wishlist.filter((elms) => elms.id !== id));
  };
  const handleWishList = (item) => {
    const cart = wishlist.find(({ id }) => id === item.id);
    if (!cart) {
      setWishlist([...wishlist, { ...item }]);
    } else {
      setWishlist([...wishlist]);
    }
  };
  const handleRemoveQuantityInCart = (id) => {
    setCartItem(
      cartItem.map((elms) =>
        elms.id === id
          ? {
              ...elms,
              quantity: elms.quantity === undefined ? 1 : elms.quantity - 1,
            }
          : elms
      )
    );
  };
  const handleAddQuantityInCart = (id) => {
    setCartItem(
      cartItem.map((elms) =>
        elms.id === id
          ? {
              ...elms,
              quantity: elms.quantity + 1,
            }
          : elms
      )
    );
  };

  const handleCheckBox = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setCheckboxes([...checkboxes, e.target.value]);
    } else {
      setCheckboxes(checkboxes.filter((elms) => elms !== e.target.value));
    }
  };
  console.log(checkboxes);

  const handleSorting = () => {
    let item = [...datas];

    if (userInput.length > 0) {
      item = item.filter((elms) =>
        elms.title.toLowerCase().includes(userInput.toLowerCase())
      );
    }

    if (checkboxes.length > 0) {
      checkboxes.map((elms) => {
        if (elms === "Price-High to Low") {
          item.sort((a, b) => b.price - a.price);
        } else if (elms === "Price-Low To High") {
          item.sort((a, b) => a.price - b.price);
        } else {
          return (item = item.filter(
            (elm) => elm.category.toLowerCase() === elms
          ));
        }
        return item;
      });
    }
    return item;
  };
  const isPresentInCart = (id) => {
    const itemFind = cartItem.find((item) => item.id === id);
    return itemFind ? true : false;
  };
  const isPresentInwishlist = (id) => {
    const itemFind = wishlist.find((item) => item.id === id);
    return itemFind ? true : false;
  };

  const totalItemInCart = cartItem.length;
  console.log("context", datas);

  return (
    <ProductContext.Provider
      value={{
        datas,
        isLoading,
        handleCart,
        cartItem,
        handleCheckBox,
        handleSorting,
        setUserInput,
        isPresentInCart,
        handleWishList,
        wishlist,
        totalItemInCart,
        isPresentInwishlist,
        handleRemoveFromCart,
        handleRemoveQuantityInCart,
        handleAddQuantityInCart,
        handleRemoveFromWish,
        handleFilterBox,
        filterBox,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ContextProvider;
