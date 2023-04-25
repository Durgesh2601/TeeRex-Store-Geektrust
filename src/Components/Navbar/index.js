import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import "./index.css";

const Navbar = () => {
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
              <div>
                <div>
                  <BsCart3 className="" size={22} />
                </div>
                <div></div>
              </div>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
