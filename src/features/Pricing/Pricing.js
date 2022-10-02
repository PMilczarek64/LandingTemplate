import React from "react";
import styled from "styled-components";
import ContentHeader from "../../common/ContentHeader";
import ContentGrid from "../ContentGrid/ContentGrid";
import map from '../../images/map.png';
import { theme } from "../../assets/styles/theme";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding-top: 50px;
`;

const CardWrapper = styled.div`
  padding-block: 50px 100px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-inline: 100px;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 770px) {
    margin-inline:25px;
  }
`;

const Card = styled.div`
width: 270px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: left;
  border: 1px solid transparent;
  border-radius: 5px;
  box-shadow: 8px 7px 24px -18px rgba(66, 68, 90, 1);
  @media screen and (max-width: 1054px) {
    width: 45%;
  }
  @media screen and (max-width: 560px) {
    width: 100%;
  }
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.colors.faded};
  padding: 20px;
  h2 {
    height: 70px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.detailGreen};
  }
`;

const CardDescription = styled.div`
  padding: 20px;
  p {
  line-height: 2.5;
  }
`;

const PurchaseButton = styled.div`
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.detailGreen};
  font-size: ${({ theme }) => theme.fontSize.l};
  padding: 15px 20px;
  letter-spacing: 4px;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  :hover {
    background: #333333;
    cursor: pointer;
  }
  i {
    font-size: 22px;
  }
`;

const Pricing = () => {

  const prices = ['$29', "$39", "$49", "$59"];

  return (
    <Container>
      <ContentHeader title="Pricing" />
      <CardWrapper>
        {prices.map(price =>
          <Card>
            <CardHeader>
              <h2>{price}</h2>
              <p>Lorem ipsum licence</p>
            </CardHeader>
            <CardDescription>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ante sed interdum labortis Est nisi efficitur lactus</p>
            </CardDescription>
            <PurchaseButton>PUrchase<i class="fa fa-cart-arrow-down" aria-hidden="true"></i></PurchaseButton>
          </Card>
        )}
      </CardWrapper>
      <ContentGrid image={map} columns="1fr 1fr" photoLocation="right" bgColor={theme.colors.white}/>
    </Container>
  );
};

export default Pricing;