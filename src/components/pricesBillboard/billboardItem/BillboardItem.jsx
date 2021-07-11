import { Container, PercentageTag } from "./styles";
import { ReactComponent as Up } from "../../../icons/arrow-drop-up.svg";
import { ReactComponent as Down } from "../../../icons/arrow-drop-down.svg";

export default function BillboardItem({ coin }) {
  return (
    <Container to={"/coins/" + coin.currency}>
      <div>
        <img
          src={`./coins-icons/svg/${coin.currency.toLowerCase()}.svg`}
          alt=""
        />
        <span>{coin.currency}</span>
      </div>
      <div>
        <span>{"$" + coin.price}</span>
        <PercentageTag color={coin.change >= 0 ? "limegreen" : "red"}>
          {coin.change >= 0 ? <Up /> : <Down />}
          {coin.change}%
        </PercentageTag>
      </div>
    </Container>
  );
}
