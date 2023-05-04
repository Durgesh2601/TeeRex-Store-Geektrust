import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartData } from "../../store/reducer";
import "./index.css";
import { getUpdatedCartData } from "../../Utils/helperFunctions";

const MainProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state?.cartData);
  const isAddedInCart = cartData?.some((item) => item?.id === product?.id);
  const cartBtnText = isAddedInCart ? "Remove" : "Add to cart";

  const handleAddToCart = () => {
    if (isAddedInCart) {
      const newCartData = cartData?.filter((item) => item?.id !== product?.id);
      dispatch(setCartData(newCartData));
    } else {
      dispatch(setCartData([...cartData, product]));
    }
  };

  return (
    <div className="product-card">
      <h4>{product?.name}</h4>
      <div className="product-img-container">
        <img
          src={product?.imageURL}
          alt="product-img"
          height={100}
          width={100}
        />
      </div>
      <div className="product-details">
        <h4 className="price-tag">Rs. {product?.price}</h4>
        <button className="add-cart-btn" onClick={handleAddToCart}>
          {cartBtnText}
        </button>
      </div>
    </div>
  );
};

const CartProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(product?.selectedQuantity);
  const cartData = useSelector((state) => state?.cartData);
  const dispatch = useDispatch();

  const handleQuantityChange = (event) => {
    const value = event.target.value;
    let newQuantity = !isNaN(value) && parseInt(value);
    if (newQuantity > product?.quantity) {
      return alert(`There are total ${product?.quantity} items left in stock`);
    }
    const updatedCartData = getUpdatedCartData(cartData, newQuantity, product);
    dispatch(setCartData(updatedCartData));
    setQuantity(newQuantity);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      const updatedCartData = getUpdatedCartData(
        cartData,
        newQuantity,
        product
      );
      dispatch(setCartData(updatedCartData));
      setQuantity(newQuantity);
    }
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    if (newQuantity > product?.quantity) {
      return alert(`There are total ${product?.quantity} left in stock`);
    }
    const updatedCartData = getUpdatedCartData(cartData, newQuantity, product);
    dispatch(setCartData(updatedCartData));
    setQuantity((prev) => prev + 1);
  };

  const handleDelete = () => {
    const newCartData = cartData?.filter((item) => item?.id !== product?.id);
    dispatch(setCartData(newCartData));
  };

  return (
    <div className="cart-product-card">
      <div className="cart-prod-img-container">
        <img
          src={product?.imageURL}
          className="cart-prod-img"
          alt="product-img"
        />
      </div>
      <div className="cart-prod-details">
        <div className="cart-prod-name">
          <div>
            <h4>{product?.name}</h4>
            <h5 className="cart-prod-price">Rs.{product?.price}</h5>
          </div>
        </div>
        <div className="quantity-input">
          <button className="decrease-btn" onClick={handleDecrease}>
            &#8722;
          </button>
          <input
            className="quantity-field"
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
          />
          <button className="increase-btn" onClick={handleIncrease}>
            &#43;
          </button>
        </div>
        <div className="cart-delete">
          <button className="cart-delete-btn" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export { MainProductCard, CartProductCard };
