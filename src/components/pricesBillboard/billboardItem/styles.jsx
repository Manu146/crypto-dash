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
    img {
      margin-right: 0.5rem;
    }
    img {
      width: 1rem;
      height: 1rem;
    }
  }
  & span {
    font-weight: bold;
  }
`;

export const PercentageTag = styled.span`
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
