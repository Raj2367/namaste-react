import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API, RESTAURANT_LOGO } from "../utils/constants";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const [resInfo, setResInfo] = useState(null);
  const { resid } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resid);
    const jsonData = await data.json();
    const regularCards =
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const regularCard =
      regularCards?.[1]?.card?.card?.itemCards ||
      regularCards?.[2]?.card?.card?.itemCards;
    setResMenu(regularCard || []);
    setResInfo(jsonData?.data?.cards[2]?.card?.card?.info);
  };
  return resMenu === null ? (
    <Shimmer />
  ) : (
    <div className="Menu">
      <h1>{resInfo?.name}</h1>
      <p>
        {resInfo?.cuisines?.join(", ")} - {resInfo?.costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {resMenu?.map((menu) => {
          const info = menu?.card?.info || menu?.dish?.info;
          return (
            <div key={info?.id} className="dish-container">
              <div className="dish-name">
                <li>
                  {info?.name} - Rs. {(info?.price ?? info?.defaultPrice) / 100}
                </li>
              </div>
              <div className="dish-image">
                <img src={RESTAURANT_LOGO + info?.imageId} />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
