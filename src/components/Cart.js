import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../utils/cartSlice";
import RestaurantMenuList from "./RestaurantMenuList";
import cartEmpty from "../../asset/img/emptyCart.webp";

const Cart = () => {
  const itemCard = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearItem());
  };
  return (
    <div className=" w-7/12 m-auto just">
      <div className="border bg-gradient-to-r from-blue-500 to-black border-b-2 text-white p-2 flex justify-center text-4xl rounded-2xl">
        CART ITEMS
      </div>
      <div>
        <button
          className="border p-2 mt-5 rounded-lg bg-amber-600 hover:bg-amber-400 hover:shadow-md"
          onClick={handleClick}
        >
          Clear Item
        </button>
      </div>
      <div>
        {itemCard.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <img src={cartEmpty} />
            <h1 className="text-5xl font-bold  ">Cart is Empty</h1>
          </div>
        ) : (
          itemCard.map((res) => (
            <RestaurantMenuList key={res?.card?.info?.id} menucard={res} />
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
