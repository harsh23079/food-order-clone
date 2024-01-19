import Imagelogo from "../../asset/img/foodorder.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Navbar = () => {
  const [loginStatus, setLoginStatus] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="nav-container m-2  h-28  flex justify-between bg-orange-300 ">
      <img
        className="nav-logo h-24 w-24 border-black border-2   rounded-full m-2"
        alt="pizza-logo"
        src={Imagelogo}
      />

      <div className="nav-list-container font-bold text-lg  ">
        <ul className="nav-list flex  justify-center ">
          <li>{onlineStatus === true ? "🟢 Online" : "🔴 Offline"}</li>
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
