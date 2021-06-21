import styled from "styled-components";

export const DefaultContainer = styled.div`
  background-color: ${({ theme }) =>
    theme.mode === "light"
      ? "var(--light-bg-secondary)"
      : "var(--dark-bg-secondary)"};
  border-radius: 0.75rem;
  padding: 0.75rem;
`;
