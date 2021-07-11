import { createSlice } from "@reduxjs/toolkit";
import coins from "../../coins-rates.json";

const ratesSlice = createSlice({
  name: "rates",
  initialState: coins,
  reducers: {},
});

export default ratesSlice.reducer;

export const ratesSelector = (state) => state.rates;
