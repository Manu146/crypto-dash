import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import styled from "styled-components";

const StyledMaskedInput = styled(MaskedInput)`
  border: none;
  flex-grow: 1;
  background-color: transparent;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) =>
    theme.mode === "light"
      ? "var(--light-primary-text)"
      : "var(--dark-primary-text)"};
  &:focus {
    outline: none;
  }
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
`;

const defaultMaskOptions = {
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ",",
  allowDecimal: true,
  decimalSymbol: ".",
  decimalLimit: 8,
  integerLimit: 7,
  allowNegative: false,
  allowLeadingZeroes: true,
};

const CurrencyInput = ({ maskOptions, ...inputProps }) => {
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions,
  });

  return <StyledMaskedInput mask={currencyMask} {...inputProps} />;
};

export default CurrencyInput;
