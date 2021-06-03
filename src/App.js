import { GlobalStyle } from "./globalStyle";
import useToggle from "./custom-hooks/useToggle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import { MainContainerWMargins } from "./components/layout/FlexLayout";
import Home from "./pages/home/Home";
import Coins from "./pages/coins/Coins";
import Coin from "./pages/coins/coin/Coin.jsx";
import Transactions from "./pages/transactions/Transactions";

function App() {
  const [isOpen, toggle] = useToggle(false);
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <MainContainerWMargins isOpen={isOpen}>
          <Switch>
            <Route path="/coins/:coin">
              <Coin />
            </Route>
            <Route path="/coins">
              <Coins />
            </Route>
            <Route path="/transactions">
              <Transactions />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </MainContainerWMargins>
      </Router>
    </div>
  );
}

export default App;
