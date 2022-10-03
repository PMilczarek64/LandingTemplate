import React from "react";
import { Container, Header, Inner } from "./Home.styles";
import { Button } from "../../common/Button.styles";

const Home = ({passedRef}) => {
  return (
    <Container ref={passedRef}>
      <Header>
        <Inner>
          <h1 className="main"><span>Borealis</span> is simple PSD Template</h1>
          <p className="description">Nam varius accusman elementum aliquam</p>
          <Button>Learn more</Button>
        </Inner>
      </Header>
    </Container>
  );
};

export default Home;