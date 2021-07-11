import React from "react";
import styled from "styled-components";
import { StyledLink } from "../common/StyledLink";
import { ReactComponent as Up } from "../../icons/arrow-drop-up.svg";
import { ReactComponent as Down } from "../../icons/arrow-drop-down.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  & div:first-of-type span {
    text-align: start;
  }
  & div:last-of-type span {
    text-align: end;
  }
`;

const FlexContainer = styled.div`
  display: flex;
`;

const Img = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 0.75rem;
`;

const ContainerLink = styled(StyledLink)`
  display: flex;
  align-items: center;
`;

const PercentageTag = styled.span`
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

const SecondaryTag = styled.span`
  color: ${({ theme }) =>
    theme.mode === "light"
      ? "var(--light-secondary-text)"
      : "var(--dark-secondary-text)"};
  display: block;
  font-weight: normal;
  font-size: 0.75rem;
`;

const PrimaryTag = styled.span`
  display: block;
  color: ${({ theme }) =>
    theme.mode === "light"
      ? "var(--light-primary-text)"
      : "var(--dark-primary-text)"};
  font-weight: 600;
`;

export default function CoinItem({ coin }) {
  return (
    <li>
      <ContainerLink to={"/coins/" + coin.currency}>
        <Img src={coin.img} alt="" />
        <Wrapper>
          <div>
            <PrimaryTag>{coin.name}</PrimaryTag>
            <FlexContainer>
              <SecondaryTag>{"$" + coin.price}</SecondaryTag>
              <PercentageTag color={coin.change >= 0 ? "limegreen" : "red"}>
                {coin.change >= 0 ? <Up /> : <Down />}
                {coin.change}%
              </PercentageTag>
            </FlexContainer>
          </div>
          <div>
            <PrimaryTag>
              {"$" + (coin.amount * coin.price).toFixed(2)}
            </PrimaryTag>
            <SecondaryTag>{coin.amount}</SecondaryTag>
          </div>
        </Wrapper>
      </ContainerLink>
    </li>
  );
}
