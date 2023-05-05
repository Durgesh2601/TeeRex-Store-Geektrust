import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import "./index.css";
import { StoreContext } from "../Context/StoreContext";

const Navbar = () => {
  const { cartData } = useContext(StoreContext);
  return (
    <nav className="navbar">
      <div>
        <h2>TeeRex Store</h2>
      </div>
      <ul>
        <div className="menu">
          <li>
            <Link to={"/"}>Products</Link>
          </li>
          <li>
            <Link to={"/cart"}>
              <div className="cart-icon-container">
                <div>
                  <BsCart3 size={22} />
                </div>
                {cartData?.length > 0 && (
                  <div className="cart-count">{cartData?.length}</div>
                )}
              </div>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
