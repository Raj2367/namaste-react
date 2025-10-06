import { useEffect, useState } from "react";
import RestaurantCard, { withPromotedTag } from "./RestaurantCard";
import { RES_LIST_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useFetchData from "../utils/useFetchData";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [rList, setResList] = useState();
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);
  const jsonData = useFetchData(RES_LIST_URL);
  const RestaurantCardPromoted = withPromotedTag(RestaurantCard);
  useEffect(() => {
    const restaurants =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResList(restaurants);
    setFilteredRes(restaurants);
  }, [jsonData]);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        It looks like you are offline!!! Please check your internet connection
      </h1>
    );
  }

  return rList === undefined ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div>
          <input
            type="text"
            className="p-4 m-4 border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            className="px-4 py-2 m-4 bg-green-100 rounded-lg hover:cursor-pointer"
            onClick={() => {
              const filteredList = rList.filter((res) =>
                res.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="px-4 py-2 m-4 bg-gray-100 rounded-lg hover:cursor-pointer"
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
      </div>
      <div className="flex flex-wrap ">
        {filteredRes.length === 0 ? (
          <h3>No restaurant found</h3>
        ) : (
          filteredRes.map((restaurant) => {
            return (
              <Link
                key={restaurant?.info?.id}
                to={`/restaurant/${restaurant?.info?.id}`}
                className="p-4"
              >
                {restaurant?.info?.areaName === "Whitefield" ? (
                  <RestaurantCard {...restaurant?.info} />
                ) : (
                  <RestaurantCardPromoted {...restaurant?.info} />
                )}
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
