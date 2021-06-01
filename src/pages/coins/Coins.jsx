import React, { useState } from "react";
//import { DefaultContainer } from "../../components/layout/DefaultContainer";
import CoinsList from "../../components/coinsList/CoinsList";
import SearchComp from "../../components/searchComp/SearchComp";

export default function Coins() {
  const [search, setSearch] = useState("");
  const submitFn = (value) => {
    setSearch(value);
  };
  return (
    <>
      <h1>Explore coins</h1>
      <SearchComp submitFn={submitFn} />
      <CoinsList searchParameter={search} />
    </>
  );
}
