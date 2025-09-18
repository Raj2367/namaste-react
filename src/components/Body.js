import resList from "../utils/mockData";
import RestaurantCard from "./Restaurant";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => {
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
