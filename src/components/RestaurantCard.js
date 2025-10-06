import { RESTAURANT_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
    props;
  return (
    <div className="p-4 w-60 h-full bg-gray-100 rounded-lg hover:bg-gray-200">
      <img
        className="rounded-lg w-60 h-50"
        src={RESTAURANT_LOGO + cloudinaryImageId}
      />
      <h3 className="font-bold text-lg py-4">{name}</h3>
      <h4>{costForTwo}</h4>
      <h5>{cuisines?.join(", ")}</h5>
      <h4>{avgRating} stars</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export const withPromotedTag = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="h-full">
        <label className="absolute ml-3 mt-4 p-1 bg-black text-white rounded-r-lg">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
