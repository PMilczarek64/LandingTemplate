import React from "react";
import styled from "styled-components";
import camera from '../images/camera.png';
import polaroid from '../images/polaroid.png';
import { ButtonGreen } from "../common/ButtonGreen.styles";

const Container = styled.div`
  margin-block: 80px;
`;

const GridWrapper = styled.div`
  padding: 60px 170px;
  font-size: 38px;
  font-weight: bold;
  text-align: start;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(1fr, auto);
  row-gap: 50px;
  grid-template-areas: 
  "a a a b b ";
  &.grey {
    grid-template-areas: 
    "a a b b b ";
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }

  .grid-item {
    padding: 30px;
    min-height: 180px;
    display: flex;
    flex-direction: column;
    p {
      font-size: 15px;
      font-weight: 400;
      margin-block: 40px;
      color: ${({ theme }) => theme.colors.faded};
    }
    h4 {
      font-weight: 400;
    }
  }
`;


const Photo1 = styled.div`
  grid-area: a;
  background-image: url(${camera});
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  
`;
const Photo2 = styled.div`
  grid-area: b;
  background-image: url(${polaroid});
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  
`;
const Description1 = styled.div`
grid-area: b;  
`;
const Description2 = styled.div`
  grid-area: a; 
`;

const PhotoGrid = () => {
  return (
    <Container>
      <GridWrapper className="grey">
        <Photo1 className="grid-item"></Photo1>
        <Description1 className="grid-item">
          <h4 className="main"><span>Alecto</span> is simple Temp</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          <ButtonGreen className="green">Learn more</ButtonGreen>
        </Description1>
      </GridWrapper>
      <GridWrapper>
        <Description2 className="grid-item">
          <h4 className="main"><span>Alecto</span> is simple Temp</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          <ButtonGreen className="green">Learn more</ButtonGreen>
        </Description2>
        <Photo2 className="grid-item"></Photo2>
      </GridWrapper>
    </Container>
  );
};

export default PhotoGrid;