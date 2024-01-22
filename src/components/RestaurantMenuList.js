import { MENU_CARD_LOGO } from "../utils/constant";

const RestaurantMenuList = (props) => {
  const { menucard } = props;
  const { name, imageId, price, defaultPrice, description } =
    menucard?.card?.info;

  return (
    <div className="flex justify-between border-b-2 items-center ">
      <div className="menu-name-price w-11/12 mb-5">
        <p className="font-bold">{name}</p>
        <p>₹{price / 100 || defaultPrice / 100}</p>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <div className="p-2 ">
        <img src={MENU_CARD_LOGO + imageId} className="h-28 rounded-lg" />
      </div>
    </div>
  );
};
export default RestaurantMenuList;
