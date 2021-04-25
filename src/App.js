import { GlobalStyle } from "./globalStyle";
import { FlexContainer, MainContainer } from "./components/layout/FlexLayout";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <FlexContainer>
        <Sidebar />
        <MainContainer></MainContainer>
      </FlexContainer>
    </div>
  );
}

export default App;
