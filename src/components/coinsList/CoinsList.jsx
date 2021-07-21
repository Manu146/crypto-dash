import { useState, useEffect } from "react";
import { List } from "./styles";
import { DefaultContainer } from "../layout/DefaultContainer";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import CoinsListItem from "./CoinsListItem";
import { useSelector } from "react-redux";
import { ratesSelector } from "../../redux/rates/ratesSlice";
import { balancesSelector } from "../../redux/balance/balanceSlice";

const compareLowerCase = (string1, string2) => {
  return string1.toLowerCase().includes(string2.toLowerCase());
};

const compareUpperCase = (string1, string2) => {
  return string1.includes(string2.toUpperCase());
};

const filterCoins = (searchParameter, data) => {
  return data.filter(
    (coin) =>
      compareLowerCase(coin.name, searchParameter) ||
      compareUpperCase(coin.currency, searchParameter)
  );
};

const fakeAsync = (searchParameter, data) => {
  const result = filterCoins(searchParameter, data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!result) reject("Error");
      resolve(result);
    }, 2000);
  });
};

export default function CoinsList({ searchParameter }) {
  const rates = useSelector(ratesSelector);
  const balances = useSelector(balancesSelector);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError(false);
        let response = await fakeAsync(searchParameter, balances);
        setResults(response);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    if (searchParameter === "") return;
    getData();
  }, [searchParameter]);

  return (
    <DefaultContainer>
      {results.length !== 0 && !loading && (
        <List>
          {results.map((coin, index) => (
            <CoinsListItem
              key={index}
              coin={{ ...coin, ...rates[coin.currency] }}
            />
          ))}
        </List>
      )}
      {loading && <LoadingSpinner />}
      {error && "An error ocurred"}
      {searchParameter !== "" &&
        results.length === 0 &&
        !loading &&
        "No results"}
    </DefaultContainer>
  );
}
