import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [status, setStatus] = useState(true);
  useEffect(() => {
    checkStatus();
  }, []);
  const checkStatus = () => {
    window.addEventListener("offline", (events) => {
      setStatus(false);
    });
    window.addEventListener("online", (events) => {
      setStatus(true);
    });
  };
  return status;
};
export default useOnlineStatus;
