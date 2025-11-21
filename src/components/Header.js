import { Link } from "react-router";
import { CDN_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { name } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  
  return (
    <div className="flex justify-between bg-pink-50">
      <div className="logo-container">
        <Link to="/">
          <img className="p-3 w-30 rounded-full" src={CDN_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us </Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">User: {name}</li>
          <li className="px-4">Online-Status: {onlineStatus ? "✅" : "❌"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
