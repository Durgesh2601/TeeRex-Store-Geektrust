import { SET_CART_DATA, SET_PRODUCTS_DATA } from "./actions";

export const setProductData = (data) => ({
  type: SET_PRODUCTS_DATA,
  payload: data,
});

export const setCartData = (data) => ({
  type: SET_CART_DATA,
  payload: data,
});

const initialState = {
  productsData: [],
  cartData: [],
  appliedFilters: {
    color: [],
    gender: [],
    price: [],
    type: [],
  },
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PRODUCTS_DATA: {
      const mappedData = payload?.map((item) => ({
        ...item,
        selectedQuantity: 1,
      }));
      return { ...state, productsData: mappedData };
    }
    case SET_CART_DATA: {
      return { ...state, cartData: payload };
    }
    default: {
      return state;
    }
  }
};
