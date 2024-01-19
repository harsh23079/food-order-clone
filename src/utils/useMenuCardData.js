import { useEffect, useState } from "react";
import { MENU_CARD_API } from "./constant";

const useMenuCardData = (id) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const data = await fetch(MENU_CARD_API + id);
    const json = await data.json();
    setResult(json);
  };
  return result;
};

export default useMenuCardData;
