export const getTotalAmount = (cartData = []) => {
  const total = cartData?.reduce((agg, item) => {
    const priceWithQuantity = item?.price * item?.quantity;
    return agg + priceWithQuantity;
  }, 0);
  return total;
};

export const getUpdatedCartData = (cartData, quantity, product) => {
  const updatedCartData = cartData?.map((item) => {
    if (item?.id === product?.id) {
      return { ...item, quantity: quantity };
    }
    return item;
  });
  return updatedCartData;
};
