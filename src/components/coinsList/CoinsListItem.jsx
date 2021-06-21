import React from "react";
import styled from "styled-components";
import { StyledLink } from "../common/StyledLink";

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
  color: var(--light-secondary-text);
  font-weight: normal;
  font-size: 0.75rem;
`;

const PrimaryTag = styled.span`
  color: var(--light-primary-text);
  font-weight: 600;
`;

const PercentageTag = styled(SecondaryTag)`
  color: ${({ color }) => color};
  font-weight: 600;
`;

export default function CoinsListItem({ coin }) {
  return (
    <li>
      <CoinLink to={"/coins/" + coin.abbreviation.toLowerCase()}>
        <div>
          <img src={coin.img} alt="" />
          <FlexContainer>
            <PrimaryTag>{coin.name}</PrimaryTag>
            <SecondaryTag>{coin.abbreviation}</SecondaryTag>
          </FlexContainer>
        </div>
        <FlexContainer>
          <PrimaryTag>{coin.price}</PrimaryTag>
          <PercentageTag color={coin.percentage > 0 ? "limegreen" : "red"}>
            {coin.percentage + "%"}
          </PercentageTag>
        </FlexContainer>
      </CoinLink>
    </li>
  );
}
