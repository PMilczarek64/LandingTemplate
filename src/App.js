import Home from "./views/Home/Home";
import { GlobalStyle } from "./assets/styles/GlobalStyle";
import AboutUs from "./views/AboutUs/AboutUs";
import PhotoGrid from "./views/PhotoGrid";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
      <AboutUs />
    </div>
  );
}

export default App;
