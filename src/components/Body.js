import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RES_LIST_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  const [rList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RES_LIST_URL);
    const jsonData = await data.json();

    setResList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRes(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return rList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filteredList = rList.filter((res) =>
              res.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRes(filteredList);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = rList.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRes(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRes.length === 0 ? (
          <h3>No restaurant founnd</h3>
        ) : (
          filteredRes.map((restaurant) => {
            return (
              <Link
                key={restaurant?.info?.id}
                to={`/restaurant/${restaurant?.info?.id}`}
              >
                <RestaurantCard
                  resName={restaurant?.info?.name}
                  imageid={restaurant?.info?.cloudinaryImageId}
                  costForTwo={restaurant?.info?.costForTwo}
                  cuisines={restaurant?.info?.cuisines}
                  rating={restaurant?.info?.avgRating}
                  deliveryTime={restaurant?.info?.sla?.slaString}
                />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
