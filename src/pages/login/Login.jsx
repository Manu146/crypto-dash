import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  authSelector,
  authStatusSelector,
  login,
  clearStatus,
} from "../../redux/auth/authSlice";
import { getBalances } from "../../redux/balance/balanceSlice";

export default function Login() {
  const status = useSelector(authStatusSelector);
  const authData = useSelector(authSelector);
  const balances = useSelector((state) => state.balances);
  const dispatch = useDispatch();
  const onSubmitLogin = (username, password) => {
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    if (Object.keys(authData).length > 0) dispatch(getBalances());
  }, [authData]);
  return (
    <>
      <h1>{status}</h1>
      <h2>{authData.username}</h2>
      <button onClick={() => onSubmitLogin("usertest1", "123456.")}>
        Login
      </button>
    </>
  );
}
