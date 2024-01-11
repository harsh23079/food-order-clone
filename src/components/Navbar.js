import Imagelogo from "../../asset/img/foodorder.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [loginStatus, setLoginStatus] = useState("Login");

  return (
    <div className="nav-container">
      <img className="nav-logo" alt="pizza-logo" src={Imagelogo} />

      <div className="nav-list-container">
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              loginStatus === "Login"
                ? setLoginStatus("Log out")
                : setLoginStatus("Login");
            }}
          >
            {loginStatus}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
