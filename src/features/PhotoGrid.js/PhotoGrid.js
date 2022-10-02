import React from "react";
import styled from "styled-components";

const GridWrapper = styled.div`
  padding-inline: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  @media screen and (max-width: 770px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .grid-item {
    display: flex;
    flex-direction: column;
  }
`;

const Photo = styled.div`
  background: url("https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  background-position: center;
  position: relative;
  min-width: 100%;
  aspect-ratio: 1 / 1;
  :hover {
    .overlay {
      display: flex;
      transition: 3s;
    }
  }
`;

const HoverPhoto = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  background-color: ${({ theme }) => theme.colors.greenTransparent};
  display: none;
  justify-content: center;
  align-items: center;
  h2 {
    color: white;
  }
`;


const PhotoGrid = () => {
  return (
    <GridWrapper>
      <Photo><HoverPhoto className="overlay"><h2>Mike Doe</h2></HoverPhoto></Photo>
      <Photo><HoverPhoto className="overlay"><h2>Mike Doe</h2></HoverPhoto></Photo>
      <Photo><HoverPhoto className="overlay"><h2>Mike Doe</h2></HoverPhoto></Photo>
      <Photo><HoverPhoto className="overlay"><h2>Mike Doe</h2></HoverPhoto></Photo>
      <Photo><HoverPhoto className="overlay"><h2>Mike Doe</h2></HoverPhoto></Photo>
      <Photo><HoverPhoto className="overlay"><h2>Mike Doe</h2></HoverPhoto></Photo>
      <Photo><HoverPhoto className="overlay"><h2>Mike Doe</h2></HoverPhoto></Photo>
      <Photo><HoverPhoto className="overlay"><h2>Mike Doe</h2></HoverPhoto></Photo>
      <Photo><HoverPhoto className="overlay"><h2>Mike Doe</h2></HoverPhoto></Photo>
      <Photo><HoverPhoto className="overlay"><h2>Mike Doe</h2></HoverPhoto></Photo>
    </GridWrapper>
  );
};

export default PhotoGrid;