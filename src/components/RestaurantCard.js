import { RESTAURANT_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resName, imageid, costForTwo, cuisines, rating, deliveryTime } =
    props;
  return (
    <div className="p-4 w-60 h-full bg-gray-100 rounded-lg hover:bg-gray-200">
      <img className="rounded-lg" src={RESTAURANT_LOGO + imageid} />
      <h3 className="font-bold text-lg py-4">{resName}</h3>
      <h4>{costForTwo}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h4>{rating} stars</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
