import React from "react";
import styled from "styled-components";
import { useState } from "react";
import clsx from "clsx";

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
    color: #6c757dc1;
    //color: ${({ theme }) => theme.colors.darkGrey};
  }
  h3 {
    font-weight: 500;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (max-width: 500px) {
    align-items: center;
      font-size: 18px;
  }
`;

 const Icon = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin-bottom: 50px;
  background-color: ${({ theme }) => theme.colors.middleGrey};
  color: white;
  font-size: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.active {
    background: ${({ theme }) => theme.colors.detailGreen};
  }
  :hover {
    background-color: ${({ theme }) => theme.colors.detailGreen};
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }
`;

const Card = ({icon}) => {
  const [isActive, setActive] = useState(true);

  return (
    <CardWrapper>
      <Icon className={clsx('', {'active': !isActive  })} onClick={() => setActive(!isActive)}>
        <span className={'fa fa-' + icon}></span>
      </Icon>
      <h3>Lorem ipsum</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
    </CardWrapper>
  );
};

export default Card;