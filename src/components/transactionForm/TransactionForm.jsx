import { useEffect, useRef, useState } from "react";
import { DefaultContainer } from "../layout/DefaultContainer";
import {
  InputBox,
  Input,
  InputLabel,
  SelectLabel,
  List,
  ListContainer,
  SelectedOption,
  OptionButton,
  BalanceTag,
  StyledForm,
} from "./styles";
import CurrencyInput from "./CurrencyInput/CurrencyInput";
import LinkButton from "../common/LinkButton";
import LoadingDots from "../loadingDots/LoadingDots";

export default function TransactionForm({ userAccounts, networks }) {
  const [userAccount, setUserAccount] = useState();
  const [amount, setAmount] = useState("");

  const [network, setNetwork] = useState();
  const [account, setAccount] = useState("");

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
          <CurrencyInput
            name="amount"
            disabled={!userAccount}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
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
          <Input name="account" disabled={!network} />
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
