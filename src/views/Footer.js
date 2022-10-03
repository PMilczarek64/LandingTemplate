import React from "react";
import styled from "styled-components";
import footer from '../images/footer.png'

const Container = styled.div`
  height: 500px;
  width: 100%;
  background-image: url(${footer});
  background-size: 80%;
  background-position-x: center;
  background-position-y: top;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 18px;
`;

const Left = styled.div`
padding: 40px 80px;
max-width: 330px;
text-align: left;
i {
  padding: 0 8px 8px 0;
  font-size: 26px;
  color: ${({theme}) => theme.colors.detailGreen};
}
`;

const Right = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row;
  padding: 40px 80px;
  a {
    color: black;
    padding: 10px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <i className="fa fa-copyright" aria-hidden="true"></i> 
        All Rights Reserved by Example Free Template by example.com
      </Left>
      <Right>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Work</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Blog</a></li>
      </Right>
    </Container>
  );
};

export default Footer;