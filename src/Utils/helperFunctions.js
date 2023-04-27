export const getTotalAmount = (cartData = []) => {
  const total = cartData?.reduce((agg, item) => {
    const priceWithQuantity = item?.price * item?.selectedQuantity;
    return agg + priceWithQuantity;
  }, 0);
  return total;
};

export const getUpdatedCartData = (cartData, quantity, product) => {
  const updatedCartData = cartData?.map((item) => {
    if (item?.id === product?.id) {
      return { ...item, selectedQuantity: quantity };
    }
    return item;
  });
  return updatedCartData;
};
