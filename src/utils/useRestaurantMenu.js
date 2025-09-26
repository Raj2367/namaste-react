import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resid) => {
  const [jsonData, setJsonData] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resid);
    const jsonData = await data.json();
    setJsonData(jsonData);
  };
  return jsonData;
};
export default useRestaurantMenu;
