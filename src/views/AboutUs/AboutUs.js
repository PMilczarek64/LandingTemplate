import React from "react";
import Cards from "../../features/Cards/Cards";
import ContentHeader from "../../common/ContentHeader";
import { ButtonGreen } from "../../common/ButtonGreen.styles";
import Banner from "../../common/Banner";
import hall from "../../images/hall.jpg"
import cat from "../../images/Cat.jpg";
import { RoundedPhoto } from "../../common/Banner";
import camera from '../../images/camera.png';
import polaroid from '../../images/polaroid.png';
import ContentGrid from "../../features/ContentGrid/ContentGrid";
import { theme } from "../../assets/styles/theme";
import styled from "styled-components";

const ContentWrapper = styled.div`
  padding-block: 50px 100px;
`;

const AboutUs = ({passedRef}) => {
  const cardTitles = ['Photos', 'Graphics', 'Drowning', 'Commercials'];
  return (
    <div ref={passedRef}>
      <ContentWrapper>
        <ContentHeader title="About Us" />
        <Cards titles={cardTitles} />
        <ButtonGreen className="center">Learn More</ButtonGreen>
      </ContentWrapper>
      <ContentGrid image={camera} columns="1fr 1fr 1fr 1fr 1fr" photoLocation="left" bgColor={theme.colors.lightGrey} zoomOut="zoomOut" />
      <ContentGrid image={polaroid} columns="1fr 1fr 1fr 1fr 1fr" photoLocation="right" />
      <Banner image={hall}>
        <RoundedPhoto photo={cat} />
        <h2><span>Borealis </span>lorem ipsum accusman elementum</h2>
        <h4>WEB Developer & Designer</h4>
      </Banner>
    </div>
  );
};


export default AboutUs;