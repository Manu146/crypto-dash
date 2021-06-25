//import "./style.css";
import { Spinner } from "./styles";

export default function LoadingDots() {
  return (
    <Spinner>
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </Spinner>
  );
}
