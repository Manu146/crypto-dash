import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
//import styled from "styled-components";
import { Input } from "../styles";

const defaultMaskOptions = {
  prefix: "",
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ",",
  allowDecimal: true,
  decimalSymbol: ".",
  decimalLimit: 8,
  integerLimit: 7,
  allowNegative: false,
  allowLeadingZeroes: true,
};

const CurrencyInput = ({ maskOptions, ...props }) => {
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions,
  });

  return (
    <MaskedInput
      mask={currencyMask}
      {...props}
      render={(ref, props) => <Input ref={ref} {...props} />}
    />
  );
};

export default CurrencyInput;
