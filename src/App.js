import Home from "./views/Home/Home";
import { GlobalStyle } from "./assets/styles/GlobalStyle";
import AboutUs from "./views/AboutUs/AboutUs";
import OurWork from "./views/OurWork/OurWork";
import Team from "./views/Team/Team";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
      <AboutUs />
      <OurWork />
      <Team />
    </div>
  );
}

export default App;
