import React from "react";
import { Container, SlideTrack } from "./styles";
import BillboardItem from "./billboardItem/BillboardItem";
import data from "../../coins-data.json";

const coinsData = [...data.slice(0, 50), ...data.slice(0, 50)];

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
