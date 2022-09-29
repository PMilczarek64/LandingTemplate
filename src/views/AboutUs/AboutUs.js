import React from "react";
import Cards from "../../features/Cards/Cards";
import PhotoGrid from "../PhotoGrid";
import ContentHeader from "../../common/ContentHeader";
import { ButtonGreen } from "../../common/ButtonGreen.styles";
import Banner, { BgFilter } from "../../common/Banner";
import hall from "../../images/hall.jpg"
import cat from "../../images/Cat.jpg";
import { RoundedPhoto } from "../../common/Banner";

const AboutUs = () => {
  const cardTitles = ['Photos', 'Graphics', 'Drowning', 'Commercials'];
  return (
    <>
      <ContentHeader title="About Us" />
      <Cards  titles={cardTitles}/>
      <ButtonGreen className="center">Learn More</ButtonGreen>
      <PhotoGrid />
      <Banner image={hall}>
        <RoundedPhoto photo={cat} />
        <h2><span>Alecto </span>lorem ipsum accusman elementum</h2>
        <h4>WEB Developer & Designer</h4>
      </Banner>
    </>
  );
};


export default AboutUs;