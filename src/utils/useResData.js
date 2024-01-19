import { useEffect, useState } from "react";
import { SWIGGY_API } from "./constant";

const useResData = () => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    setResData(json);
    
  };
  return resData;
};
export default useResData;
