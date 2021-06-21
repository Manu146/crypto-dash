import React, { useState, useEffect } from "react";
import { List } from "./styles";
import { DefaultContainer } from "../layout/DefaultContainer";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import CoinsListItem from "./CoinsListItem";

const data = [
  {
    name: "Bitcoin",
    abbreviation: "BTC",
    price: "$55,749.37",
    percentage: +12.53,
    img: "./coins-icons/svg/btc.svg",
  },
  {
    name: "Ethereum",
    abbreviation: "ETH",
    price: "$3,393.12",
    percentage: +10.12,
    img: "./coins-icons/svg/eth.svg",
  },
  {
    name: "Cardano",
    abbreviation: "ADA",
    price: "$1.756",
    percentage: +7.23,
    img: "./coins-icons/svg/ada.svg",
  },
  {
    name: "XRP",
    abbreviation: "XRP",
    price: "$1.536",
    percentage: +3.26,
    img: "./coins-icons/svg/xrp.svg",
  },
  {
    name: "Dogecoin",
    abbreviation: "DOGE",
    price: "$0.421",
    percentage: +33.53,
    img: "./coins-icons/svg/doge.svg",
  },
  {
    name: "Bitcoin Cash",
    abbreviation: "BCH",
    price: "$10.756.23",
    percentage: +1.23,
    img: "./coins-icons/svg/bch.svg",
  },

  {
    name: "BAT",
    abbreviation: "BAT",
    price: "$1.12",
    percentage: +22.98,
    img: "./coins-icons/svg/bat.svg",
  },
  {
    name: "Stellar Lumens",
    abbreviation: "XLM",
    price: "$0.604",
    percentage: -11.22,
    img: "./coins-icons/svg/xlm.svg",
  },
];

const compareLowerCase = (string1, string2) => {
  return string1.toLowerCase().includes(string2.toLowerCase());
};

const compareUpperCase = (string1, string2) => {
  return string1.includes(string2.toUpperCase());
};

const filterCoins = (searchParameter) => {
  return data.filter(
    (coin) =>
      compareLowerCase(coin.name, searchParameter) ||
      compareUpperCase(coin.abbreviation, searchParameter)
  );
};

const asyncData = (searchParameter) => {
  const data = filterCoins(searchParameter);
  console.log(data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!data || data.length === 0) reject("Error");
      resolve(data);
    }, 2000);
  });
};

export default function CoinsList({ searchParameter }) {
  const [coinsData, setCoinsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError(false);
        let response = await asyncData(searchParameter);
        setCoinsData(response);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    if (searchParameter === "") return;
    getData();
  }, [searchParameter]);

  return (
    <DefaultContainer>
      {coinsData.length !== 0 && !loading && (
        <List>
          {coinsData.map((coin, index) => (
            <CoinsListItem key={index} coin={coin} />
          ))}
        </List>
      )}
      {loading && <LoadingSpinner />}
      {error && "An error ocurred"}
    </DefaultContainer>
  );
}
