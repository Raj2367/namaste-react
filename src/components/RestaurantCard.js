import { RESTAURANT_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resName, imageid, costForTwo, cuisines, rating, deliveryTime } =
    props;
  return (
    <div className="res-card">
      <img className="res-logo" src={RESTAURANT_LOGO + imageid} />
      <h3>{resName}</h3>
      <h4>{costForTwo}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h4>{rating} stars</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
