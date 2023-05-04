export const getTotalAmount = (cartData = []) => {
  const total = cartData?.reduce((agg, item) => {
    const priceWithQuantity =
      Number(item?.price) * Number(item?.selectedQuantity);
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

export const getAfterSearchData = (data, searchVal) => {
  if (data && searchVal) {
    const afterSearchData = data?.filter((item) => {
      return Object.values(item)
        ?.join("")
        ?.trim()
        ?.toLocaleLowerCase()
        .includes(searchVal?.trim().toLocaleLowerCase());
    });
    return afterSearchData;
  }
};
