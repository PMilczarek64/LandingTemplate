import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  margin-block: 20px;
  align-items: baseline;
    @media screen and (max-width: 950px) {
      width: 100%;
      text-align: center;
    }
`;

const ContentWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  color: ${({ theme }) => theme.colors.darkGrey};
  h1 {
    color: ${({ theme }) => theme.colors.darkGrey};
    font-weight: 300;
    margin-bottom: 20px;
  }
`;

const Icon = styled.div`
  min-height: 80px;
  min-width: 80px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.detailGreen};
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

const OurWorkCards = () => {

  const icons = ['rocket', 'pencil', 'copyright', 'suitcase']
  const titles = ['Development', 'Design', 'Branding', 'Portfolio'];
  
  titles.map((title, index) => {
    console.log("iteration: " + index);
    console.log("element " + title);
  })

  return (
    <Container>
      {titles.map((title, index) =>
      <CardWrapper>
        <Icon><span className={"fa fa-" + icons[index]} /></Icon>
        <ContentWrapper>
          <h1>{title}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum augue sed est porttitor, ac blandit nisl posuere.</p>
        </ContentWrapper>
      </CardWrapper>
      )}
    </Container>
  );
};

export default OurWorkCards;