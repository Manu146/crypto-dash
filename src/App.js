import { GlobalStyle } from "./globalStyle";
import { FlexContainer, MainContainer } from "./components/layout/FlexLayout";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import PricesBillboard from "./components/pricesBillboard/PricesBillboard";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <FlexContainer>
        <Router>
          <Switch> </Switch>
          <Sidebar />
          <MainContainer>
            <PricesBillboard />
          </MainContainer>
        </Router>
      </FlexContainer>
    </div>
  );
}

export default App;
