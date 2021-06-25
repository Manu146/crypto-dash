import { Container, PercentageTag } from "./styles";
import { ReactComponent as Up } from "../../../icons/arrow-drop-up.svg";
import { ReactComponent as Down } from "../../../icons/arrow-drop-down.svg";

export default function BillboardItem({ coin }) {
  return (
    <Container to={"/coins/" + coin.abbreviation}>
      <div>
        <img src={coin.img} alt="" />
        <span>{coin.abbreviation}</span>
      </div>
      <div>
        <span>{coin.price}</span>
        <PercentageTag color={coin.percentage > 0 ? "limegreen" : "red"}>
          {coin.percentage > 0 ? <Up /> : <Down />}
          {coin.percentage}%
        </PercentageTag>
      </div>
    </Container>
  );
}
