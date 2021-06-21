import TransactionForm from "../../components/transactionForm/TransactionForm";
import { useState, useEffect } from "react";

const accountsData = [
  {
    currency: "USD",
    name: "USD Account",
    balance: 15.73,
    img: "./coins-icons/svg/usdfiat.svg",
  },
  {
    currency: "ETH",
    name: "ETH Account",
    balance: 0.089,
    img: "./coins-icons/svg/eth.svg",
  },
  {
    currency: "DOGE",
    name: "DOGE Account",
    balance: 23.47,
    img: "./coins-icons/svg/doge.svg",
  },
];

const networksData = [
  {
    id: 1,
    name: "ETH Network",
    img: "./coins-icons/svg/eth.svg",
  },
  {
    id: 2,
    name: "BTC Network",
    img: "./coins-icons/svg/btc.svg",
  },
  {
    id: 3,
    name: "XRP Network",
    img: "./coins-icons/svg/xrp.svg",
  },
  {
    id: 4,
    name: "CryptoDash Network",
    img: "",
  },
];

const fakeAsync = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!data) reject("Erro");
      resolve(data);
    }, 2000);
  });
};

export default function Transactions() {
  const [accounts, setAccounts] = useState();
  const [networks, setNetworks] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        let data1 = await fakeAsync(accountsData);
        let data2 = await fakeAsync(networksData);
        setAccounts(data1);
        setNetworks(data2);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <TransactionForm userAccounts={accounts} networks={networks} />
    </>
  );
}
