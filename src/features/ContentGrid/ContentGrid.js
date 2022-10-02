import React from "react";
import styled from "styled-components";
import { ButtonGreen } from "../../common/ButtonGreen.styles";
import { theme } from '../../assets/styles/theme'

const Container = styled.div`
  background-color: ${({bgColor}) => bgColor};
`;

const GridWrapper = styled.div`
  padding: 60px 150px;
  text-align: start;
  align-items: center;
  display: grid;
  grid-template-columns: ${({columns}) => columns};
  grid-auto-rows: minmax(1fr, auto);
  row-gap: 50px;
  grid-template-areas: ${({photoLocation, columns}) => 
  (photoLocation === 'left' && columns === '1fr 1fr' && `'a b'`)  ||
  (photoLocation === 'right'  && columns === '1fr 1fr' && `'b a'`) ||
  (photoLocation === 'left' && columns === '1fr 1fr 1fr 1fr 1fr' && `'a a b b b'`) ||
  (photoLocation === 'right' && columns === '1fr 1fr 1fr 1fr 1fr' && `'b b b a a'`)
  };

 
  @media only screen and (max-width: 1200px) {
    row-gap: 50px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 
    "a"
    "b";
    img{
        max-width: 330px;
      }
  }
  @media only screen and (max-width: 780px) {
    padding-inline: 50px;
  }

  .grid-item {
    min-height: 180px;
    display: flex;
    flex-direction: column;
    h1 {
      font-weight: 300;
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.l};
      font-weight: 400;
      margin-block: 40px;
      color: ${({ theme }) => theme.colors.faded};
    }
    @media only screen and (max-width: 1200px) {
      align-items: center;
    }
    @media only screen and (max-width: 400px) {
      align-items: center;
      p {
        font-size: 18px;
      }
    }
  }
`;


const Photo = styled.div`
  grid-area: a;
  justify-content: center;
  align-items: center;
  display: flex;

  img {
    max-width: 100%;
    &.zoomOut {
      transform: scale(0.8);
    }
  }
`;

const Description = styled.div`
grid-area: b;  
`;

const ContentGrid = ({image, columns, photoLocation, bgColor, zoomOut}) => {
  console.log("test " + photoLocation);
  return (
    <Container bgColor={bgColor}>
      <GridWrapper className="grey" columns={columns} photoLocation={photoLocation}>
        <Photo className="grid-item"><img src={image} className={zoomOut} ></img></Photo>
        <Description className="grid-item">
          <h1 className="main"><span>Alecto</span> is simple Temp</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          <ButtonGreen className="green">Learn more</ButtonGreen>
        </Description>
      </GridWrapper>
    </Container>
  );
};

export default ContentGrid;