import { Container, SlideTrack } from "./styles";
import BillboardItem from "./billboardItem/BillboardItem";
import { useSelector } from "react-redux";
import data from "../../coins-abbreviations.json";
import { ratesSelector } from "../../redux/rates/ratesSlice";

const coinsData = [...data.slice(0, 50), ...data.slice(0, 50)];

export default function PricesBillboard() {
  const rates = useSelector(ratesSelector);
  return (
    <Container>
      <SlideTrack>
        {rates &&
          coinsData.map((coin, index) => (
            <BillboardItem
              coin={{ ...coin, ...rates[coin.currency] }}
              key={index}
            />
          ))}
      </SlideTrack>
    </Container>
  );
}
