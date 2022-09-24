import React from "react";
import Cards from "../../features/Cards/Cards";
import PhotoGrid from "../PhotoGrid";
import { Header } from "./AboutUs.syles";
import { ButtonGreen } from "../../common/ButtonGreen.styles";

const AboutUs = () => {
  const cardTitles = ['Photos', 'Graphics', 'Drowning', 'Commercials'];
  return (
    <>
      <Header>
        <h1>About us</h1>
        <span></span>
        <p>lorem ipsum accusman elementum. Aliquam fermentum eros in suscipit scelerisque</p>
      </Header>
      <Cards  titles={cardTitles}/>
      <ButtonGreen className="center">Learn More</ButtonGreen>
      <PhotoGrid />
    </>
  );
};


export default AboutUs;