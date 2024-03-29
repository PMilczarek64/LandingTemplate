import React from "react";
import { useState } from "react";
import clsx from "clsx";
import styled from "styled-components";

export const Container = styled.div`
  margin: 60px 50px;
  min-height: 300px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin-inline: 15px;
  align-items: center;
  text-align: center;
  p {
    margin-block: 30px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.faded};
    //color: ${({ theme }) => theme.colors.darkGrey};
  }
  h3 {
    font-weight: 500;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Icon = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-bottom: 40px;
  background-color: ${({ theme }) => theme.colors.middleGrey};
  color: ${({ theme }) => theme.colors.grey};
  font-size: 60px;
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
        <CardWrapper key={icon}>
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