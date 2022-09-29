import React from "react";
import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin: 50px 20px;
  h1{
    margin-bottom: 15px;
    font-weight: 200;
    color: ${({ theme }) => theme.colors.black};
  }
  span {
    background-color: ${({ theme }) => theme.colors.detailGreen};
    width: 30px;
    height: 1px;
    margin: 15px;
  }
  p {
    margin: 10px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.darkGrey};;
  }
`;

const ContentHeader = ({title}) => {
  return (
    <Header>
        <h1>{title}</h1>
        <span></span>
        <p>lorem ipsum accusman elementum. Aliquam fermentum eros in suscipit scelerisque</p>
      </Header>
  );
};

export default ContentHeader;