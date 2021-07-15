import React from "react";
//Global Styled
import GlobalStyle from "./Components/GlobalStyled";

//Pages
import AboutUs from "./Pages/AboutUs";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
