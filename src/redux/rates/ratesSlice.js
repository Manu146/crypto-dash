import { createSlice } from "@reduxjs/toolkit";
import coins from "../../coins-rates.json";

const getUpdatedPrice = (oldPrice) => {
  let max = oldPrice + oldPrice * 0.1;
  let min = oldPrice - oldPrice * 0.1;
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
};

const getPriceChange = (oldPrice, newPrice) => {
  return parseFloat((((newPrice - oldPrice) * 100) / oldPrice).toFixed(2));
};

/*const fakeUpdatePrices = (balances) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let newBalances = balances.map((balance) => {
        let newPrice = getUpdatedPrice(balance.price);
      });
    }, 2000);
  });
};*/

const updateRate = (coin) => {
  let newPrice = getUpdatedPrice(coin.price);
  let change = getPriceChange(coin.price, newPrice);
  return { price: newPrice, change };
};

const ratesSlice = createSlice({
  name: "rates",
  initialState: coins,
  reducers: {
    updateRates: (state) => {
      for (const coin in state) {
        let updatedCoin = updateRate(state[coin]);
        state[coin] = updatedCoin;
      }
    },
  },
});

export default ratesSlice.reducer;

export const { updateRates } = ratesSlice.actions;
export const ratesSelector = (state) => state.rates;
