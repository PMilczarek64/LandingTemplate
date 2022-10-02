import React from "react";
import ContentHeader from "../../common/ContentHeader";
import styled from "styled-components";
import PhotoGrid from "../../features/PhotoGrid.js/PhotoGrid";
import Pricing from "../../features/Pricing/Pricing";

const Container = styled.div`
padding-block: 80px;
  @media screen and (max-width: 1150px) {
  }
`;

const Team = () => {
  return (
    <Container>
      <ContentHeader title="Meet our team" />
      <PhotoGrid />
      <Pricing />
    </Container>
  );
};

export default Team;