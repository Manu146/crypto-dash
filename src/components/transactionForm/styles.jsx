import styled from "styled-components";
import { DefaultContainer } from "../layout/DefaultContainer";

export const InputBox = styled.div`
  display: flex;
  background-color: ${({ theme }) =>
    theme.mode === "light"
      ? "var(--light-bg-secondary)"
      : "var(--dark-bg-secondary)"};
  padding: 0.5rem 1rem;
  border: 2px solid
    ${({ theme }) =>
      theme.mode === "light"
        ? "var(--light-bg-primary)"
        : "var(--dark-bg-primary)"};
  border-radius: 0.75rem;
  align-items: center;
  margin-bottom: 0.5rem;
  position: relative;
  transition: border-color 0.2s ease-in;
  &:hover,
  &:focus-within {
    border-color: var(--brand-color);
  }
`;

export const SelectLabel = styled.label`
  position: absolute;
  top: -0.75rem;
  right: 1.5rem;
  font-size: 0.75rem;
  color: ${({ theme }) =>
    theme.mode === "light"
      ? "var(--light-primary-text)"
      : "var(--dark-primary-text)"};
  background-color: ${({ theme }) =>
    theme.mode === "light"
      ? "var(--light-bg-secondary)"
      : "var(--dark-bg-secondary)"};
  padding: 0.25rem;
`;

export const InputLabel = styled.label`
  position: absolute;
  top: -0.75rem;
  left: 1rem;
  font-size: 0.75rem;
  color: ${({ theme }) =>
    theme.mode === "light"
      ? "var(--light-primary-text)"
      : "var(--dark-primary-text)"};
  background-color: ${({ theme }) =>
    theme.mode === "light"
      ? "var(--light-bg-secondary)"
      : "var(--dark-bg-secondary)"};
  padding: 0.25rem;
`;

export const List = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  z-index: 2;
  background-color: ${({ theme }) =>
    theme.mode === "light"
      ? "var(--light-bg-secondary)"
      : "var(--dark-bg-secondary)"};
  border-radius: 0 0 0.75rem 0.75rem;
  overflow: hidden;
`;

export const ListContainer = styled.div`
  position: relative;
  width: 16rem;
  min-height: 3rem;
  border-left: 2px solid
    ${({ theme }) =>
      theme.mode === "light"
        ? "var(--light-bg-primary)"
        : "var(--dark-bg-primary)"};
  background-color: ${({ theme }) =>
    theme.mode === "light"
      ? "var(--light-bg-secondary)"
      : "var(--dark-bg-secondary)"};
  display: flex;
  align-items: center;
  ${List} {
    display: none;
  }
  &:hover ${List} {
    display: block;
  }

  span {
    display: inline-block;
  }

  & > span {
    padding: 0 1rem;
  }
`;

export const SelectedOption = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  img {
    width: 2rem;
    height: 2rem;
  }
  & > span {
    padding: 0 1rem;
  }
`;

export const OptionButton = styled.button`
  font-size: 1rem;
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.mode === "light"
      ? "var(--light-bg-secondary)"
      : "var(--dark-bg-secondary)"};
  &:hover {
    background-color: ${({ theme }) =>
      theme.mode === "light"
        ? "var(--light-bg-primary)"
        : "var(--dark-bg-primary)"};
  }

  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    span {
      padding-left: 1rem;
    }
  }

  img {
    width: 2rem;
    height: 2rem;
  }
`;

export const Input = styled.input`
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

export const BalanceTag = styled.span`
  font-weight: 600;
`;

export const StyledForm = styled.form`
  max-width: 52rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${DefaultContainer} {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

export const ErrorSpan = styled.span`
  color: red;
  font-size: 0.75rem;
  position: absolute;
  top: calc(100% + 2px);
`;
