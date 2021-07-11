import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/auth/authSlice";
import balanceReducer from "./redux/balance/balanceSlice";
import ratesReducer from "./redux/rates/ratesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    balances: balanceReducer,
    rates: ratesReducer,
  },
});
