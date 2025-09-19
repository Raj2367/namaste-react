import { useEffect, useState } from "react";
import RestaurantCard from "./Restaurant";
import { RES_LIST_URL } from "../utils/constants";

const Body = () => {
  const [rList, setResList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RES_LIST_URL);
    const jsonData = await data.json();
    console.log(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );

    setResList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = rList.filter(
              (res) => res.info.avgRating > 4.5
            );
            setResList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {rList.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.info?.id}
              resName={restaurant.info?.name}
              imageid={restaurant.info?.cloudinaryImageId}
              costForTwo={restaurant.info?.costForTwo}
              cuisines={restaurant.info?.cuisines}
              rating={restaurant.info?.avgRating}
              deliveryTime={restaurant.info?.sla?.slaString}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
