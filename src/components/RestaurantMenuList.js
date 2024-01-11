import { MENU_CARD_LOGO } from "../utils/constant";

const RestaurantMenuList = (props) => {
  const { menucard } = props;
  const { name, imageId, price, defaultPrice } = menucard?.card?.info;

  return (
    <div className="menu-list-container">
      <div className="menu-name-price">
        <p>{name}</p>
        <p>₹{price / 100 || defaultPrice/100}</p>
      </div>

      <img src={MENU_CARD_LOGO + imageId} className="menu-card-img" />
    </div>
  );
};
export default RestaurantMenuList;
