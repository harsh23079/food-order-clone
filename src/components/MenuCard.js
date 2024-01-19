import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantMenuList from "./RestaurantMenuList";
import Shimmer from "./Shimmer";
import useMenuCardData from "../utils/useMenuCardData";
const MenuCard = () => {
  const [resData, SetresData] = useState([]);
  const [detailRes, SetDetailRes] = useState([]);
  const [isSelected, SetIsSelected] = useState(false);
  const [filterData, SetFilterData] = useState([]);

  const { id } = useParams();
  const menuCardData = useMenuCardData(id);

  useEffect(() => {
    const { itemCards } =
      menuCardData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card || {};
    SetresData(itemCards || []);
    SetDetailRes(menuCardData?.data?.cards[0]?.card?.card?.info);

    const filterRes = itemCards?.filter(
      (res) => res?.card?.info?.itemAttribute?.vegClassifier === "VEG"
    );
    SetFilterData(filterRes);
  }, [menuCardData]);

  if (menuCardData === null) {
    return <Shimmer />;
  }

  return (
    <div>
      <h2>MenuCard</h2>
      <div className="Restaurant-name-container">
        <div className="name-rating">
          <div className="name-time">
            {" "}
            <div className="name-cuisine-container">
              <div className="rest-name-menu">{detailRes?.name}</div>
              <span>{detailRes?.cuisines?.join(",")}</span>
            </div>
            <div className="address-time">
              <div>{detailRes?.areaName}</div>
              <div> 🏍️ {detailRes?.sla?.lastMileTravelString}</div>
            </div>
          </div>

          <div className="rating-container">
            <div>{detailRes?.avgRatingString} ⭐️</div>
            <div>{detailRes?.totalRatingsString}</div>
          </div>
        </div>

        <hr className="dot-line"></hr>

        <div className="time-price-container">
          <div>⏱️ {detailRes?.sla.slaString}</div>
          <div>{detailRes?.costForTwoMessage}</div>
        </div>

        <div>
          <div style={{ display: "flex", gap: "5px" }}>
            <div
              style={{
                border: "1px solid rgb(186, 175, 175)",
                padding: "5px",
                borderRadius: "5px",
                backgroundColor: "rgb(186, 175, 175)",
                alignSelf: "center",
              }}
            >
              Veg only
            </div>
            <div className="toggle-div">
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={() => {
                    SetIsSelected(!isSelected);
                  }}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>

          <h3>
            Recommended(
            {isSelected === false ? resData?.length : filterData?.length})
          </h3>
          <div>
            {isSelected === false
              ? resData?.map((res) => (
                  <RestaurantMenuList
                    key={res?.card?.info?.id}
                    menucard={res}
                  />
                ))
              : filterData?.map((res) => (
                  <RestaurantMenuList
                    key={res?.card?.info?.id}
                    menucard={res}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuCard;
