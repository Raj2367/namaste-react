import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
import useFetchData from "../utils/useFetchData";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { resid } = useParams();
  const jsonData = useFetchData(MENU_API + resid);
  const regularCards =
    jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const resInfo = jsonData?.data?.cards[2]?.card?.card?.info;
  const itemCategories = regularCards?.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  return itemCategories === undefined ? (
    <Shimmer />
  ) : (
    <div className="text-center p-4 m-4">
      <div className="font-bold text-4xl">{resInfo?.name}</div>
      <div>
        {resInfo?.cuisines?.join(", ")} - {resInfo?.costForTwoMessage}
      </div>
      <div className="py-4 font-semibold text-2xl">Menu</div>
      {itemCategories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category?.card?.card?.categoryId}
            {...category?.card?.card}
            showItem={index === showIndex}
            setShowIndex={() => {
              setShowIndex(index === showIndex ? null : index);
            }}
          />
        );
      })}
    </div>
  );
};
export default RestaurantMenu;
