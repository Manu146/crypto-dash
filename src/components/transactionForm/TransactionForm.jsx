import styled from "styled-components";
import { DefaultContainer } from "../layout/DefaultContainer";
import { useState } from "react";
import LinkButton from "../common/LinkButton";
import LoadingDots from "../loadingDots/LoadingDots";

const InputBox = styled.div`
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

const SelectLabel = styled.label`
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

const InputLabel = styled.label`
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

const List = styled.ul`
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

const ListContainer = styled.div`
  position: relative;
  width: 14rem;
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
    padding: 0 1rem;
  }
`;

const SelectedOption = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  & img {
    width: 2rem;
    height: 2rem;
  }
`;

const OptionButton = styled.button`
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

  & img {
    width: 2rem;
    height: 2rem;
  }
`;

const Input = styled.input`
  border: none;
  flex-grow: 1;
  background-color: transparent;
  color: ${({ theme }) =>
    theme.mode === "light"
      ? "var(--light-primary-text)"
      : "var(--dark-primary-text)"};
  &:focus {
    outline: none;
  }
`;

const BalanceTag = styled.span`
  font-weight: 600;
`;

const StyledForm = styled.form`
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

export default function TransactionForm({ userAccounts, networks }) {
  const [userAccount, setUserAccount] = useState();
  const [network, setNetwork] = useState();
  let accountOptions = userAccounts?.filter((account) => {
    if (!userAccount) return account;
    return account.name !== userAccount.name;
  });
  let networkOptions = networks?.filter((networkOpt) => {
    if (!network) return networkOpt;
    return networkOpt.name !== network.name;
  });
  return (
    <StyledForm>
      <h1>Send funds to others</h1>
      <DefaultContainer>
        <InputBox>
          <InputLabel>Amount</InputLabel>
          <Input name="amount" />
          <SelectLabel>From</SelectLabel>
          <ListContainer>
            {!userAccount && userAccounts && <span>Select account</span>}
            {userAccount && (
              <SelectedOption>
                <img src={userAccount.img} alt={userAccount.currency} />
                <span>{userAccount.name}</span>
                <BalanceTag>
                  {userAccount.balance} {userAccount.currency}
                </BalanceTag>
              </SelectedOption>
            )}
            {!userAccounts && <LoadingDots />}
            <List>
              {accountOptions &&
                accountOptions.map((account, index) => (
                  <li key={index}>
                    <OptionButton
                      onClick={(e) => {
                        e.preventDefault();
                        setUserAccount(account);
                      }}
                    >
                      <img src={account.img} alt={account.currency} />
                      <span>{account.name}</span>
                      <BalanceTag>
                        {account.balance} {account.currency}
                      </BalanceTag>
                    </OptionButton>
                  </li>
                ))}
            </List>
          </ListContainer>
        </InputBox>
      </DefaultContainer>
      <DefaultContainer>
        <InputBox>
          <InputLabel>Account</InputLabel>
          <Input name="account" />
          <SelectLabel>To</SelectLabel>
          <ListContainer>
            {!network && networks && <span>Select network</span>}
            {network && (
              <SelectedOption>
                <img src={network.img} alt={network.currency} />
                <span>{network.name}</span>
                <BalanceTag>
                  {network.balance} {network.currency}
                </BalanceTag>
              </SelectedOption>
            )}
            {!networks && <LoadingDots />}
            <List>
              {networks &&
                networkOptions.map((networkOpt) => (
                  <li key={networkOpt.id}>
                    <OptionButton
                      onClick={(e) => {
                        e.preventDefault();
                        setNetwork(networkOpt);
                      }}
                    >
                      <img src={networkOpt.img} alt={networkOpt.currency} />
                      <span>{networkOpt.name}</span>
                      <BalanceTag>
                        {networkOpt.balance} {networkOpt.currency}
                      </BalanceTag>
                    </OptionButton>
                  </li>
                ))}
            </List>
          </ListContainer>
        </InputBox>
      </DefaultContainer>
      <LinkButton as="button" size="large" width="40">
        Send
      </LinkButton>
    </StyledForm>
  );
}
