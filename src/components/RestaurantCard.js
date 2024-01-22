import { RES_LOGO_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resdata } = props;
  const {
    name,
    cloudinaryImageId,
    avgRating,
    cuisines,
    areaName,
    costForTwo,
    sla,
  } = resdata?.info;
  let text = cuisines?.join(",");

  return (
    <div className="h-fit w-[200px] bg-gray-100 rounded-lg hover:bg-slate-300  transition-all duration-700 hover:scale-110  ">
      <img
        alt="res-img"
        src={RES_LOGO_URL + cloudinaryImageId}
        className="h-52 w-[200px] rounded-t-lg "
      />

      <div className=" mt-4  text-sm p-2">
        <h3 className="text-lg truncate font-bold">{name}</h3>
        <p className="font-bold truncate">{areaName}</p>
        <p className="truncate">{text}</p>
        <h4>AvgRating: {avgRating} ⭐️</h4>
        <h4 className="font-bold">{costForTwo}</h4>
        <h4>DeliveryTime {sla?.deliveryTime} min</h4>
      </div>
    </div>
  );
};

// export const UpdatedRestaurantCard = (RestaurantCard) => {
//   return (props) => {
//     return <RestaurantCard />;
//   };
// };

export default RestaurantCard;
