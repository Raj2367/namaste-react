import { useEffect, useState } from "react";

const useFetchData = (URL) => {
  const [jsonData, setJsonData] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(URL);
    const jsonData = await data.json();
    setJsonData(jsonData);
  };
  return jsonData;
};
export default useFetchData;
