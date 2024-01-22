import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useMenuCardData from "../utils/useMenuCardData";
import MenuCardList from "./MenuCardList";
const MenuCard = () => {
  const [detailRes, SetDetailRes] = useState([]);
  const [isSelected, SetIsSelected] = useState(false);
  const [menuCardListData, setMenuCardListData] = useState([]);
  const [showMenuListItem, setShowMenuListItem] = useState(0);

  const { id } = useParams();
  const menuCardData = useMenuCardData(id);

  useEffect(() => {
    SetDetailRes(menuCardData?.data?.cards[0]?.card?.card?.info);

    const filterMenuCardList =
      menuCardData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (res) =>
          res?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    setMenuCardListData(filterMenuCardList);
    console.log(filterMenuCardList);
  }, [menuCardData]);

  if (menuCardData === null) {
    return <Shimmer />;
  }

  return (
    <div className="  w-7/12 m-auto content-center  mt-10 flex flex-col gap-5">
      <div className="flex justify-between text-sm">
        <div className="name-time">
          <div className="text-2xl font-bold">{detailRes?.name}</div>
          <span className="mt-2">{detailRes?.cuisines?.join(",")}</span>
          <div className="flex">
            <div>{detailRes?.areaName},&nbsp;</div>
            <div> 🏍️ {detailRes?.sla?.lastMileTravelString}</div>
          </div>
        </div>

        <div className="border  rounded-xl flex flex-col justify-center items-center p-1  ">
          <div className="">{detailRes?.avgRatingString} ⭐️</div>
          <div className="w-full border-b-2 border-dashed"></div>
          <div>{detailRes?.totalRatingsString}</div>
        </div>
      </div>
      <div className="w-full border-b-2 border-dashed"></div>

      <div className=" flex gap-5">
        <div className="border rounded-full bg-gray-400 px-1">⏳</div>
        <div> {detailRes?.sla.slaString}</div>
        <div className="border h-6 px-2 rounded-full bg-gray-400 text-black">
          ₹
        </div>
        <div>{detailRes?.costForTwoMessage}</div>
      </div>

      <div>
        <div className="flex gap-5 items-center">
          <div className="border p-2 rounded-lg bg-gray-400">Veg only</div>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              onChange={() => {
                SetIsSelected(!isSelected);
              }}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
          </label>
        </div>
        <div className="w-full border-b-2 mt-2"></div>
        <div className="mt-5">
          {menuCardListData?.map((res, index) => (
            <MenuCardList
              key={res?.card?.card?.title}
              props={res}
              isSelected={isSelected}
              toggle={() => {
               
                showMenuListItem === index
                  ? setShowMenuListItem(0)
                  : setShowMenuListItem(index);
              }}
              active={showMenuListItem === index}
            />
          
          ))}
        </div>
      </div>
    </div>
  );
};
export default MenuCard;
