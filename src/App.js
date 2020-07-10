import React from "react";
import "./App.css";
import Main from "./components/Main";
import { Wrapper } from "./components/Wrapper";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <Wrapper>
        <Main />
      </Wrapper>
    </GlobalProvider>
  );
}

export default App;
