import React from "react";
import { Container, PercentageTag } from "./styles";

export default function BillboardItem({ coin }) {
  return (
    <Container>
      <div>
        <img src={coin.img} alt="" />
        <span>{coin.abbreviation}</span>
      </div>
      <div>
        <span>{coin.price}</span>
        <PercentageTag color={coin.percentage > 0 ? "limegreen" : "red"}>
          {coin.percentage}%
        </PercentageTag>
      </div>
    </Container>
  );
}
