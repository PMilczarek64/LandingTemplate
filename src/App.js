import Home from "./views/Home/Home";
import { GlobalStyle } from "./assets/styles/GlobalStyle";
import AboutUs from "./views/AboutUs/AboutUs";
import OurWork from "./views/OurWork/OurWork";
import Team from "./views/Team/Team";
import Navbar from "./features/Nav/Navbar";
import Footer from "./views/Footer"
import { useRef } from "react";
import Pricing from "./features/Pricing/Pricing";

function App() {

  const pages = {
    home : useRef(null),
    about : useRef(null),
    work : useRef(null),
    services : useRef(null),
    team : useRef(null),
  }

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Navbar action={scrollToSection} pages={pages} />
      <Home passedRef={pages.home} />
      <AboutUs passedRef={pages.about} />
      <OurWork passedRef={pages.work} />
      <Team passedRef={pages} />
      <Pricing passedRef={pages.services} />
      <Footer />
    </div>
  );
}

export default App;
