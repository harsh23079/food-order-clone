import { MENU_CARD_LOGO } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const RestaurantMenuList = (props) => {
  const { menucard } = props;
  const dispatch = useDispatch();

  const { name, imageId, price, defaultPrice, description } =
    menucard?.card?.info;
  const clickDecrement = () => {
    dispatch(removeItem(menucard));
  };
  const clickIncrement = () => {
    dispatch(addItem(menucard));
  };
  return (
    <div className="flex justify-between border-b-2 items-center ">
      <div className="menu-name-price w-9/12 mb-5">
        <p className="font-bold">{name}</p>
        <p>₹{price / 100 || defaultPrice / 100}</p>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <div className="p-2 w-2/12 ">
        <div className="border p-2 bg-black text-white rounded-xl absolute mx-5 hover:bg-gray-600">
          <button onClick={clickDecrement}>
            {menucard.quantity !== undefined ? "-" : menucard.quantity} &nbsp;
          </button>
          <button onClick={clickIncrement}>
            {menucard.quantity === undefined ? "ADD" : menucard.quantity} &nbsp;
            +
          </button>
        </div>

        <img src={MENU_CARD_LOGO + imageId} className="h-28 w-32 rounded-lg " />
      </div>
    </div>
  );
};
export default RestaurantMenuList;
