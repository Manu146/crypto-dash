import ThemedToaster from "./components/themedToaster/ThemedToaster";
import { GlobalStyle } from "./globalStyle";
import useToggle from "./custom-hooks/useToggle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/privateRoute/privateRoute";
import Sidebar from "./components/sidebar/Sidebar";
import { MainContainerWMargins } from "./components/layout/FlexLayout";
import ThemeContextProv from "./contexts/ThemeContext";
import { Provider } from "react-redux";
import { store } from "./store";
import Home from "./pages/home/Home";
import Coins from "./pages/coins/Coins";
import Coin from "./pages/coins/coin/Coin.jsx";
import Transactions from "./pages/transactions/Transactions";
import Login from "./pages/login/Login";
import PollingWrapper from "./components/pollingComp/PollingWrapper";

function App() {
  const [isOpen, toggle] = useToggle(false);
  return (
    <Provider store={store}>
      <ThemeContextProv>
        <div className="App">
          <GlobalStyle />
          <PollingWrapper everyNSeconds={120}>
            <Router>
              <Sidebar isOpen={isOpen} toggle={toggle} />
              <MainContainerWMargins isOpen={isOpen}>
                <Switch>
                  <PrivateRoute path="/coins/:coin" component={Coin} />
                  <PrivateRoute path="/coins" component={Coins} />
                  <PrivateRoute path="/transactions" component={Transactions} />
                  <PrivateRoute path="/home" component={Home} />
                  <Route path="/login" component={Login} />
                </Switch>
              </MainContainerWMargins>
            </Router>
          </PollingWrapper>
        </div>
      </ThemeContextProv>
      <ThemedToaster position="top-right" />
    </Provider>
  );
}

export default App;
