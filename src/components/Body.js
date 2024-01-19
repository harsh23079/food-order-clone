import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useResData from "../utils/useResData";

const Body = () => {
  const [restData, setrestData] = useState([]);
  const [SearchResult, setSearchResult] = useState("");
  const [FilterDataResult, setFilterDataResult] = useState([]);

  const jsonData = useResData();

  useEffect(() => {
    const { restaurants } =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle || {};
    setrestData(restaurants || []);
    setFilterDataResult(restaurants || []);
  }, [jsonData]);

  return jsonData === null ? (
    <>
      <Shimmer />
    </>
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
