import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import "./index.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartDataCount = useSelector((state) => state?.cartData?.length);
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
                {cartDataCount > 0 && (
                  <div className="cart-count">{cartDataCount}</div>
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
