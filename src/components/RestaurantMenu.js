import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

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
    setResMenu(
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards
    );
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
          return (
            <li key={menu?.card?.info?.id}>
              {menu?.card?.info?.name} - Rs.
              {(menu?.card?.info?.price || menu?.card?.info?.defaultPrice) /
                100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
