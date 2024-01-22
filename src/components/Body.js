import RestaurantCard from "./RestaurantCard"; //, { UpdatedRestaurantCard }
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useResData from "../utils/useResData";

const Body = () => {
  const [restData, setrestData] = useState([]);
  const [SearchResult, setSearchResult] = useState("");
  const [FilterDataResult, setFilterDataResult] = useState([]);

  const jsonData = useResData();
  // const updatedRestaurantCard = UpdatedRestaurantCard(RestaurantCard);
  useEffect(() => {
    const { restaurants } =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle || {};
    // console.log(restaurants);
    setrestData(restaurants || []);
    setFilterDataResult(restaurants || []);
  }, [jsonData]);

  return jsonData === null ? (
    <div>
      <Shimmer />
    </div>
  ) : (
    <div className="">
      <div className="flex mt-10 mb-10 gap-10 justify-between">
        <div className="search-container flex items-center gap-5 ">
          <input
            className="border-2 border-black outline-none h-full w-60 p-1 "
            type="text"
            value={SearchResult}
            placeholder="Type the name of Restaurant..."
            onChange={(e) => {
              setSearchResult(e.target.value);
            }}
          />
          <div>
            <button
              className="p-2 bg-blue-500 text-white hover:bg-blue-200 rounded-lg hover:text-black"
              onClick={() => {
                const filterData = restData.filter((res) => {
                  return res?.info?.name
                    .toLowerCase()
                    .includes(SearchResult.toLowerCase());
                });
                setFilterDataResult(filterData);
                console.log(filterData);
              }}
            >
              Search
            </button>
          </div>
        </div>
        <button
          className="search-box p-2 bg-gray-400 hover:bg-gray-300 rounded-lg"
          onClick={() => {
            const filterData = restData.filter(
              (restdata) => restdata?.info.avgRating > 4.3
            );
            setFilterDataResult(filterData);
            console.log(filterData);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="restaurant-card flex flex-wrap gap-5 gap-y-10">
        {FilterDataResult?.map((resdata) => (
          <Link to={"/restaurant/" + resdata.info.id} key={resdata.info.id}>
            {
              //console.log(resdata)
            }
            <RestaurantCard resdata={resdata} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
