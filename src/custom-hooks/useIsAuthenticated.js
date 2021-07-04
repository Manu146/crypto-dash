import { useSelector } from "react-redux";
import { authSelector } from "../redux/auth/authSlice";

export default function useIsAuthenticated() {
  const authData = useSelector(authSelector);
  return Object.keys(authData).length > 0;
}
