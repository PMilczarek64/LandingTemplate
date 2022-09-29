import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  span {
    color: ${({ theme }) => theme.colors.detailGreen};
    font-weight: 700;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  @media only screen and (max-width: 480px) {
    transform: translateY(-70%);
  }
  h2 {
    font-weight: 200;
    margin-block: 20px;
  }
  h4 {
    font-weight: 400;
    color: #6c757dc1;
  }
 
`;

export const BgPhoto = styled.div`
  width: 100%;
  height: 100vw;
  background: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: 0px 50%;
  position: relative;
  filter: brightness(13%);
`;

export const RoundedPhoto = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-image: ${props => `url(${props.photo})`};
  background-size: cover;
  background-position: 0px 15%;
  &:hover {
    transform: scale(1);
    filter: hue-rotate(3800deg);
    transition: 25s;
  }
`;

const Banner = (props) => {
  return (
    <Wrapper>
        <BgPhoto image={props.image} />
      <Inner>{props.children}</Inner>
    </Wrapper>
  );
};

export default Banner;
