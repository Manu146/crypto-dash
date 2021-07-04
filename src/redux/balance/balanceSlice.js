import { createSlice } from "@reduxjs/toolkit";

const userBalances = [
  {
    name: "Bitcoin",
    currency: "BTC",
    img: "./coins-icons/svg/btc.svg",
    ammount: 0.000376,
  },
  {
    name: "Ethereum",
    currency: "ETH",
    img: "./coins-icons/svg/eth.svg",
    amount: 0.00912,
  },
  {
    name: "Cardano",
    currency: "ADA",
    img: "./coins-icons/svg/ada.svg",
    amount: 2.45,
  },
  {
    name: "XRP",
    currency: "XRP",
    img: "./coins-icons/svg/xrp.svg",
    amount: 1.723,
  },
  {
    name: "Dogecoin",
    currency: "DOGE",
    img: "./coins-icons/svg/doge.svg",
    amount: 9.23,
  },
  {
    name: "Bitcoin Cash",
    currency: "BCH",
    img: "./coins-icons/svg/bch.svg",
    amount: 2.33,
  },

  {
    name: "BAT",
    img: "./coins-icons/svg/bat.svg",
    amount: "10.15 BAT",
  },
];

const balanceSlice = createSlice({
  name: "auth",
  initialState: [],
  reducers: {
    getBalances: (state) => {
      return userBalances;
    },
    reduceBalance: (state, action) => {
      const { amount, account } = action.payload;
      let index = state.findIndex((balance) => balance.name === account);
      if (index) {
        let newBalance = state[index];
        newBalance.amount -= amount;
        state[index] = newBalance;
      }
    },
  },
});

export default balanceSlice.reducer;
export const { reduceBalance, getBalances } = balanceSlice.actions;

export const balancesSelector = (state) => state.balances;
