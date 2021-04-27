import styled from "styled-components";
import { StyledLink } from "../../common/StyledLink";

export const Container = styled(StyledLink)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.75rem;
  & > div {
    display: flex;
    align-items: center;
    img,
    span:first-child {
      margin-right: 0.5rem;
    }
  }
  & span {
    font-weight: bold;
  }
`;

export const PercentageTag = styled.span`
  color: ${({ color }) => color};
`;
