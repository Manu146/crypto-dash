import React from "react";
import { Container, SlideTrack } from "./styles";
import BillboardItem from "./billboardItem/BillboardItem";

const coins = [
  { name: "ADA", price: "1.35", percentage: -5, img: "ada.png" },
  { name: "BTC", price: "55,342", percentage: 6.87, img: "btc.png" },
  { name: "BAT", price: "1.12", percentage: 15, img: "bat.png" },
  { name: "DOGE", price: "0.278", percentage: -2, img: "doge.png" },
  { name: "DASH", price: "0.78", percentage: 8.75, img: "dash.png" },
  { name: "ETH", price: "2,504.2", percentage: 18.34, img: "eth.png" },
  { name: "LTC", price: "2.34", percentage: -17, img: "ltc.png" },
  { name: "NANO", price: "7.56", percentage: 3.78, img: "nano.png" },
  { name: "VET", price: "8.73", percentage: -6.34, img: "vet.png" },
  { name: "XMR", price: "16.79", percentage: 18.63, img: "xmr.png" },
  { name: "XRP", price: "1.287", percentage: 12.73, img: "xrp.png" },
];

const coinsData = [...coins, ...coins];

export default function index() {
  return (
    <Container>
      <SlideTrack>
        {coinsData.map((coin, index) => (
          <BillboardItem coin={coin} key={index} />
        ))}
      </SlideTrack>
    </Container>
  );
}
