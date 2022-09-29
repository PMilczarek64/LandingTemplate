import React from "react";
import { Container, Header, Inner } from "./Home.styles";
import Navbar from "../../features/Nav/Navbar";
import { Button } from "../../common/Button.styles";

const Home = () => {
  return (
    <Container>
      <Header>
        <Navbar />
        <Inner>
          <h1 className="main"><span>Alecto</span> is simple PSD Template</h1>
          <p className="description">Nam varius accusman elementum aliquam</p>
          <Button>Learn more</Button>
        </Inner>
      </Header>
    </Container>
  );
};

export default Home;