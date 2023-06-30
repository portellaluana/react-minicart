import { useState } from "react";
import { AppContext } from "./AppContext";

export const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartVisible, setCartVisible] = useState(false);

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    cartVisible,
    setCartVisible,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
