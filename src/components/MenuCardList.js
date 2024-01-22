import { useEffect, useState } from "react";
import RestaurantMenuList from "./RestaurantMenuList";

const MenuCardList = (res) => {
  const [resData, SetresData] = useState([]);
  const [filterData, SetFilterData] = useState([]);

  const { props, isSelected, toggle, active } = res;
  const { title, itemCards } = props?.card?.card;
  useEffect(() => {
    SetresData(itemCards);
    const filterRes = itemCards?.filter(
      (e) => e?.card?.info?.itemAttribute?.vegClassifier === "VEG"
    );
    SetFilterData(filterRes);
  }, []);

  return (
    <div className="border-b-4 border-gray-300  ">
      <div className="flex justify-between mb-2 mt-2">
        <h1 className="text-lg font-bold ">
          {title}({isSelected === false ? resData?.length : filterData?.length})
        </h1>
        <span onClick={toggle} className="cursor-pointer">
          {active ? "⬆️" : "⬇️"}
        </span>
      </div>
      <div className="">
        {isSelected === false
          ? active &&
            resData?.map((res) => (
              <RestaurantMenuList key={res?.card?.info?.id} menucard={res} />
            ))
          : active &&
            filterData?.map((res) => (
              <RestaurantMenuList key={res?.card?.info?.id} menucard={res} />
            ))}
      </div>
    </div>
  );
};

export default MenuCardList;
