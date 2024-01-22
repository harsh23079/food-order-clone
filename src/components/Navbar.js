import Imagelogo from "../../asset/img/foodorder.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Navbar = () => {
  const [loginStatus, setLoginStatus] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="nav-container h-28 flex justify-between items-center bg-orange-300 border-b-2 border-black">
      <img
        className="nav-logo h-24 w-24 border-black border-2   rounded-full m-2"
        alt="pizza-logo"
        src={Imagelogo}
      />

      <div className="nav-list-container flex m-4  gap-4 items-center font-bold text-lg uppercase  ">
        <ul className="nav-list flex gap-4  ">
          <li>{onlineStatus === true ? "🟢 Online" : "🔴 Offline"}</li>
          <li>
            <Link to="/" className="hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-white">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-white">
              Contact Us
            </Link>
          </li>
          <li className="hover:text-white cursor-pointer">Cart</li>
        </ul>
        <button
          onClick={() => {
            loginStatus === "Login"
              ? setLoginStatus("Log out")
              : setLoginStatus("Login");
          }}
          className="border p-2 bg-red-600 hover:bg-red-400 hover:text-white rounded-lg "
        >
          {loginStatus}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
