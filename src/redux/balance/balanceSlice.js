import { createSlice } from "@reduxjs/toolkit";

const userBalances = [
  {
    id: 1,
    name: "Bitcoin",
    currency: "BTC",
    img: "./coins-icons/svg/btc.svg",
    amount: 0.000376,
  },
  {
    id: 2,
    name: "Ethereum",
    currency: "ETH",
    img: "./coins-icons/svg/eth.svg",
    amount: 0.00912,
  },
  {
    id: 3,
    name: "Cardano",
    currency: "ADA",
    img: "./coins-icons/svg/ada.svg",
    amount: 2.45,
  },
  {
    id: 4,
    name: "XRP",
    currency: "XRP",
    img: "./coins-icons/svg/xrp.svg",
    amount: 1.723,
  },
  {
    id: 5,
    name: "Dogecoin",
    currency: "DOGE",
    img: "./coins-icons/svg/doge.svg",
    amount: 9.23,
  },
  {
    id: 6,
    name: "Bitcoin Cash",
    currency: "BCH",
    img: "./coins-icons/svg/bch.svg",
    amount: 2.33,
  },
  {
    id: 7,
    name: "BAT",
    currency: "BAT",
    img: "./coins-icons/svg/bat.svg",
    amount: 10.15,
  },
];

/*const getUpdatedPrice = (oldPrice) => {
  let max = oldPrice + oldPrice * 0.1;
  let min = oldPrice - oldPrice * 0.1;
  return Math.random() * (max - min) + min;
};

const getPriceChange = (oldPrice, newPrice) => {
  return ((newPrice - oldPrice) * 100) / oldPrice;
};

const fakeUpdatePrices = (balances) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let newBalances = balances.map((balance) => {
        let newPrice = getUpdatedPrice(balance.price);
      });
    }, 2000);
  });
};*/

const balanceSlice = createSlice({
  name: "balances",
  initialState: [],
  reducers: {
    getBalances: (state) => {
      return userBalances;
    },
    reduceBalance: (state, action) => {
      const { amount, account } = action.payload;
      let balance = state.find((balance) => balance.id === account);
      if (balance) {
        balance.amount -= amount;
      }
    },
  },
});

export default balanceSlice.reducer;
export const { reduceBalance, getBalances } = balanceSlice.actions;

export const balancesSelector = (state) => state.balances;
