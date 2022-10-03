import React from "react";
import ContentHeader from "../../common/ContentHeader";
import styled from "styled-components";
import PhotoGrid from "../../features/PhotoGrid.js/PhotoGrid";
import Pricing from "../../features/Pricing/Pricing";

const Container = styled.div`
padding-top: 100px;
  @media screen and (max-width: 1150px) {
  }
`;

const Team = ({passedRef}) => {
  return (
    <Container ref={passedRef.team}>
      <ContentHeader title="Meet our team" />
      <PhotoGrid />
    </Container>
  );
};

export default Team;