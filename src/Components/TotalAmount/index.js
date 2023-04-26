import { useSelector } from "react-redux";
import { getTotalAmount } from "../../Utils/helperFunctions";

const TotalAmount = () => {
  const cartData = useSelector((state) => state?.cartData);
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
