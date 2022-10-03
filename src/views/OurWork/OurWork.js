import React from "react";
import styled from "styled-components";
import ContentHeader from "../../common/ContentHeader";
import OurWorkCards from "../../features/OurWorkCards/OurWorkCards";

const Container = styled.div`
  padding: 80px 130px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  @media screen and (max-width: 1150px) {
    padding-inline: 50px;
  }
`;

const OurWork = ({passedRef}) => {
  return (
    <Container ref={passedRef}>
      <ContentHeader title="Our Work" />
      <OurWorkCards />
    </Container>
  );
};

export default OurWork;