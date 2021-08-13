import { useDispatch } from "react-redux";
import { updateRates } from "../../redux/rates/ratesSlice";
import { useEffect } from "react";

export default function PollingWrapper({ children, everyNSeconds }) {
  const dispatch = useDispatch();
  useEffect(() => {
    let intv = setInterval(() => {
      dispatch(updateRates());
    }, everyNSeconds * 1000);

    return () => {
      clearInterval(intv);
    };
  }, [dispatch]);
  return <>{children}</>;
}
