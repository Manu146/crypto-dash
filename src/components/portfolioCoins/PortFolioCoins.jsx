import React from "react";
import styled from "styled-components";
import { DefaultContainer } from "../layout/DefaultContainer";
//import { StyledLink } from "../common/StyledLink";
import CoinItem from "./CoinItem";

const CoinsList = styled.ul`
  list-style: none;
  column-count: 1;
  //column-gap: 1rem;
  & li {
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;
  }
  @media only screen and (min-width: 768px) {
    column-count: 2;
  }

  @media only screen and (min-width: 1024px) {
    column-count: 3;
  }
`;

const data = [
  {
    name: "Bitcoin",
    price: "$55,749.37",
    percentage: +12.53,
    img: "./coins-icons/svg/btc.svg",
    ammount: "0.000376 BTC",
    usd_eq: "$17.92",
  },
  {
    name: "Ethereum",
    price: "$3,393.12",
    percentage: +10.12,
    img: "./coins-icons/svg/eth.svg",
    ammount: "0.00912 ETH",
    usd_eq: "$35.72",
  },
  {
    name: "Cardano",
    price: "$1.756",
    percentage: +7.23,
    img: "./coins-icons/svg/ada.svg",
    ammount: "2.45 ADA",
    usd_eq: "$4.23",
  },
  {
    name: "XRP",
    price: "$1.536",
    percentage: +3.26,
    img: "./coins-icons/svg/xrp.svg",
    ammount: "1.723 XRP",
    usd_eq: "$2.81",
  },
  {
    name: "Doge",
    price: "$0.421",
    percentage: +33.53,
    img: "./coins-icons/svg/doge.svg",
    ammount: "9.23 DOGE",
    usd_eq: "$6.47",
  },
  {
    name: "Bitcoin Cash",
    price: "$10.756.23",
    percentage: +1.23,
    img: "./coins-icons/svg/bch.svg",
    ammount: "2.33 BCH",
    usd_eq: "$25723.12",
  },

  {
    name: "BAT",
    price: "$1.12",
    percentage: +22.98,
    img: "./coins-icons/svg/bat.svg",
    ammount: "10.15 BAT",
    usd_eq: "$13.74",
  },
];

export default function PortFolioCoins() {
  return (
    <DefaultContainer>
      <CoinsList>
        {data.map((coin, index) => (
          <CoinItem coinData={coin} key={index} />
        ))}
      </CoinsList>
    </DefaultContainer>
  );
}
