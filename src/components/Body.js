import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { SWIGGY_API } from "../utils/constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // console.log("body render");
  const [restData, setrestData] = useState([]);
  const [SearchResult, setSearchResult] = useState("");
  const [FilterDataResult, setFilterDataResult] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    console.log(json?.data);
    setrestData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterDataResult(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="search-container">
        <input
          type="text"
          value={SearchResult}
          onChange={(e) => {
            setSearchResult(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filterData = restData.filter((res) => {
              return res?.info?.name
                .toLowerCase()
                .includes(SearchResult.toLowerCase());
            });
            setFilterDataResult(filterData);
            console.log(filterData);
            // console.log(SearchResult);
          }}
        >
          Search
        </button>
      </div>
      <button
        className="search-box"
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
      <div className="restaurant-card">
        {FilterDataResult?.map((resdata) => (
          <Link to={"/restaurant/" + resdata.info.id} key={resdata.info.id}>
            {" "}
            <RestaurantCard resdata={resdata} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
