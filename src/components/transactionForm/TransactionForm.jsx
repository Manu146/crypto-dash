import { useEffect, useRef, useState } from "react";
import useFormValidation from "../../custom-hooks/useFormValidation";
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
  ErrorSpan,
} from "./styles";
import CurrencyInput from "./CurrencyInput/CurrencyInput";
import LinkButton from "../common/LinkButton";
import LoadingDots from "../loadingDots/LoadingDots";

const validations = {
  userAccount: {
    required: {
      value: true,
      message: "Source account required",
    },
  },
  amount: {
    required: {
      value: true,
      message: "Amount required",
    },
    custom: {
      message:
        "Amount must be greater than 0 and less or equal than max balance",
    },
  },
  network: {
    required: {
      value: true,
      message: "Destination network required",
    },
  },
  account: {
    required: {
      value: true,
      message: "Destination account required",
    },
    custom: {
      message: "Invalid address",
    },
  },
};

export default function TransactionForm({ userAccounts, networks }) {
  const [userAccount, setUserAccount] = useState();
  const [amount, setAmount] = useState("");

  const [network, setNetwork] = useState();
  const [account, setAccount] = useState("");

  validations.account.custom.isValid = (account) => {
    const netsRegex = {
      XRPNetwork: /^0x[a-fA-F0-9]{40}$/,
      ETHNetwork: /^0x[a-fA-F0-9]{40}$/,
      BTCNetwork: /^(?:[13]{1}[a-km-zA-HJ-NP-Z1-9]{26,33}|bc1[a-z0-9]{39,59})$/,
      CryptoDashNetwork:
        /^[A-Za-z0-9!#$%&“”+/=?^_{}|~,():;<>[]-.]*@[A-Za-z0-9-]*.[A-Za-z]+(?:.[A-Za-z]+)?(?:.[A-Za-z]+)?$/,
    };
    return RegExp(netsRegex[network.name.replace(" ", "")]).test(account);
  };

  validations.amount.custom.isValid = (amount) => {
    return amount > 0 && amount <= userAccount.balance;
  };

  const { handleSubmit, errors } = useFormValidation(
    { userAccount: userAccount?.name, amount, network: network?.name, account },
    validations,
    () =>
      console.log({
        userAccount: userAccount.name,
        amount,
        network: network.name,
        account,
      })
  );

  useEffect(() => {
    setAmount("0");
  }, [userAccount]);

  useEffect(() => {
    setAccount("");
  }, [network]);

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
          {errors.amount && <ErrorSpan>{errors.amount}</ErrorSpan>}
          <InputLabel>Amount</InputLabel>
          <CurrencyInput
            type="text"
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
          {errors.account && <ErrorSpan>{errors.account}</ErrorSpan>}
          <InputLabel>Account</InputLabel>
          <Input
            name="account"
            disabled={!network}
            value={account}
            onChange={(e) => {
              setAccount(e.target.value);
            }}
          />
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
      <LinkButton as="button" size="large" width="40" onClick={handleSubmit}>
        Send
      </LinkButton>
    </StyledForm>
  );
}
