import React, { createContext, useState } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [cartData, setCartData] = useState([]);

  return (
    <StoreContext.Provider
      value={{ productsData, cartData, setProductsData, setCartData }}
    >
      {children}
    </StoreContext.Provider>
  );
};
