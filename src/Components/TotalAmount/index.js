import { useContext } from "react";
import { getTotalAmount } from "../../Utils/helperFunctions";
import { StoreContext } from "../Context/StoreContext";

const TotalAmount = () => {
  const { cartData } = useContext(StoreContext);
  const totalAmout = getTotalAmount(cartData);

  return (
    cartData?.length > 0 && (
      <div className="total-amount-container">
        <div className="total-amount-details">
          <h4>Total amount</h4>
          <p className="total-price">Rs.{!isNaN(totalAmout) && totalAmout}</p>
        </div>
      </div>
    )
  );
};

export default TotalAmount;
