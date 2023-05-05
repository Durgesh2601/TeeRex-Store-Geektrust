import { useContext } from "react";
import TotalAmount from "../../Components/TotalAmount";
import EmptyScreen from "../../Components/EmptyScreen";
import { CartProductCard } from "../../Components/ProductCard";
import { StoreContext } from "../../Components/Context/StoreContext";
import "./index.css";

const CartPage = () => {
  const { cartData } = useContext(StoreContext);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h3>Shopping Cart</h3>
      </div>
      {cartData?.length > 0 ? (
        <div className="cart-data-container">
          {cartData?.map((item) => (
            <CartProductCard product={item} key={item?.id} />
          ))}
        </div>
      ) : (
        <EmptyScreen />
      )}
      <TotalAmount />
    </div>
  );
};
export default CartPage;
