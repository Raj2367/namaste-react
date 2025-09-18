import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./Restaurant";

const Body = () => {
  const [rList, setResList] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = rList.filter((res) => res.avgRating > 4);
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
              key={restaurant.id}
              resName={restaurant.name}
              imageid={restaurant.cloudinaryImageId}
              costForTwo={restaurant.costForTwo}
              cuisines={restaurant.cuisines}
              rating={restaurant.avgRating}
              deliveryTime={restaurant.sla.slaString}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
