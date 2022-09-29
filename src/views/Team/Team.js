import React from "react";
import ContentHeader from "../../common/ContentHeader";
import styled from "styled-components";

const Container = styled.div`
  padding: 80px 130px;
  @media screen and (max-width: 1150px) {
  }
`;

const Team = () => {
  return (
    <Container>
      <ContentHeader title="Meet our team" />
    </Container>
  );
};

export default Team;