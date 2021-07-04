import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/auth/authSlice";
import balanceReducer from "./redux/balance/balanceSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    balances: balanceReducer,
  },
});
