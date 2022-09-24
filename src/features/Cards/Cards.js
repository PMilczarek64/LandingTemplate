import React from "react";
import { useState } from "react";
import clsx from "clsx";
import styled from "styled-components";

export const Container = styled.div`
  margin: 60px 50px 20px 50px;
  min-height: 300px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
  margin: 20px;
  align-items: center;
  text-align: center;
  p {
    margin-block: 30px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.faded};
    font-size: 14px;
    //color: ${({ theme }) => theme.colors.darkGrey};
  }
  h3 {
    font-weight: 500;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    p {
      font-size: 18px;
    }
  }
`;

const Icon = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin-bottom: 50px;
  background-color: ${({ theme }) => theme.colors.middleGrey};
  color: ${({ theme }) => theme.colors.grey};
  font-size: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.active {
    background: ${({ theme }) => theme.colors.detailGreen};
    color: ${({ theme }) => theme.colors.white};
  }
  :hover {
    background-color: ${({ theme }) => theme.colors.detailGreen};
    transition: 0.5s ease-in-out;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }
`;


const Cards = () => {

  const icons = ['film', 'rocket', 'bicycle', 'photo']
  const [active, setActive] = useState('')

  return (
    <Container>
      {icons.map( icon =>
        <CardWrapper >
          <Icon className={clsx(active === icon && 'active')} onClick={() => setActive(icon)}>
            <span className={'fa fa-' + icon}></span>
          </Icon>
          <h3>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </CardWrapper>
      )}
    </Container >
  );
};

export default Cards;