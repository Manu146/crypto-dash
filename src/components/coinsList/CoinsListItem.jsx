import React from "react";
import styled from "styled-components";
import { StyledLink } from "../common/StyledLink";
import { ReactComponent as Up } from "../../icons/arrow-drop-up.svg";
import { ReactComponent as Down } from "../../icons/arrow-drop-down.svg";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CoinLink = styled(StyledLink)`
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
  }

  & img {
    width: 2rem;
    height: 2rem;
    margin-right: 0.75rem;
  }

  & > ${FlexContainer} {
    align-items: flex-end;
  }
`;

const SecondaryTag = styled.span`
  color: ${({ theme }) =>
    theme.mode === "light"
      ? "var(--light-secondary-text)"
      : "var(--dark-secondary-text)"};
  font-weight: normal;
  font-size: 0.75rem;
`;

const PrimaryTag = styled.span`
  color: ${({ theme }) =>
    theme.mode === "light"
      ? "var(--light-primary-text)"
      : "var(--dark-primary-text)"};
  font-weight: 600;
`;

const PercentageTag = styled(SecondaryTag)`
  color: ${({ color }) => color};
  font-weight: 600;
  margin-left: 0.5rem;
  font-size: 0.75rem;
  position: relative;
  padding-left: 1rem;
  & svg {
    fill: ${({ color }) => color};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -4px;
  }
`;

export default function CoinsListItem({ coin }) {
  return (
    <li>
      <CoinLink to={"/coins/" + coin.currency.toLowerCase()}>
        <div>
          <img src={coin.img} alt="" />
          <FlexContainer>
            <PrimaryTag>{coin.name}</PrimaryTag>
            <SecondaryTag>{coin.currency}</SecondaryTag>
          </FlexContainer>
        </div>
        <FlexContainer>
          <PrimaryTag>{"$" + coin.price}</PrimaryTag>
          <PercentageTag color={coin.change > 0 ? "limegreen" : "red"}>
            {coin.change >= 0 ? <Up /> : <Down />}
            {coin.change + "%"}
          </PercentageTag>
        </FlexContainer>
      </CoinLink>
    </li>
  );
}
