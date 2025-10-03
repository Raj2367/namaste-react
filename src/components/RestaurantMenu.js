import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API, RESTAURANT_LOGO } from "../utils/constants";
import useFetchData from "../utils/useFetchData";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const jsonData = useFetchData(MENU_API + resid);
  const regularCards =
    jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const resMenu =
    regularCards?.[1]?.card?.card?.itemCards ||
    regularCards?.[2]?.card?.card?.itemCards;
  const resInfo = jsonData?.data?.cards[2]?.card?.card?.info;
  return resMenu === undefined ? (
    <Shimmer />
  ) : (
    <div className="p-4 m-4">
      <div className="font-bold text-4xl">{resInfo?.name}</div>
      <div>
        {resInfo?.cuisines?.join(", ")} - {resInfo?.costForTwoMessage}
      </div>
      <div className="py-4 font-semibold text-2xl">Menu</div>
      <ul>
        {resMenu?.map((menu) => {
          const info = menu?.card?.info || menu?.dish?.info;
          return (
            <div key={info?.id} className="flex justify-between p-2 w-5xl">
              <div className="py-4 text-md">
                <li>
                  {info?.name} - Rs. {(info?.price ?? info?.defaultPrice) / 100}
                </li>
              </div>
              <div className="w-50">
                <img className="rounded-lg" src={RESTAURANT_LOGO + info?.imageId} />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
