import { useState, useEffect } from "react";
import { List } from "./styles";
import { DefaultContainer } from "../layout/DefaultContainer";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import CoinsListItem from "./CoinsListItem";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ratesSelector } from "../../redux/rates/ratesSlice";
import coins from "../../coins-abbreviations.json";
import { ReactComponent as Searching } from "../../icons/searching.svg";
import { ReactComponent as NotFound } from "../../icons/not_found.svg";

const compareLowerCase = (string1, string2) => {
  return string1.toLowerCase().includes(string2.toLowerCase());
};

const compareUpperCase = (string1, string2) => {
  return string1.includes(string2.toUpperCase());
};

const filterCoins = (searchParameter, data) => {
  return data.filter((coin) =>
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

const SvgContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    width: 50%;
  }
  & > svg {
    width: 100%;
    height: auto;
  }
`;

const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Container = styled(DefaultContainer)`
  min-height: 27rem;
  position: relative;
`;

export default function CoinsList({ searchParameter }) {
  const rates = useSelector(ratesSelector);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError(false);
        let response = await fakeAsync(searchParameter, coins);
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
    <Container>
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
      {searchParameter === "" && !loading && (
        <>
          <h1>Start searching now!</h1>
          <SvgContainer>
            <Searching />
          </SvgContainer>
        </>
      )}
      {loading && (
        <SpinnerContainer>
          <LoadingSpinner />
        </SpinnerContainer>
      )}
      {error && "An error ocurred"}
      {searchParameter !== "" && results.length === 0 && !loading && (
        <>
          <h1>We couldn't find what you're looking for</h1>
          <SvgContainer>
            <NotFound />
          </SvgContainer>
        </>
      )}
    </Container>
  );
}
