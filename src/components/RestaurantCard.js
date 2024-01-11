import { RES_LOGO_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  // console.log("card");
  // console.log(props);
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

  return (
    <div className="card-container">
      <img
        alt="res-img"
        src={RES_LOGO_URL + cloudinaryImageId}
        className="restaurant-img"
      />
      <div className="card-info">
        <h3>{name}</h3>
        <h4>{areaName}</h4>
        <h4>{cuisines?.join(",")}</h4>
        <h4>AvgRating: {avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>DeliveryTime {sla?.deliveryTime} min</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
