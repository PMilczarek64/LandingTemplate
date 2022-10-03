import React, { useState } from "react";
import styled from "styled-components";
import NavBurger from "./NavBurger";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 10px;
  z-index: 2;
  @media (max-width: 768px) {
    height: 100px;
  }
  &.active {
  background: linear-gradient(130deg, rgba(0, 0, 0, 0.9), #17daa3de);
  @media (max-width: 768px) {
    background: transparent;
  }
  };

  .logo {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    color: ${({ theme }) => theme.colors.white};
    padding-left: 30px;
    span {
      color:${({ theme }) => theme.colors.detailGreen};
    }
    @media screen and (max-width: 768px) {
      padding: 0 50px;
      font-size: 80px;
      &.black {
        color: black;
      }
    }
  }
`

const Navbar = ({action, pages}) => {

  const [navbar, setNavbar] = useState(false);
  const [blackLogo, setBlackLogo] = useState(false);


  const changeBackground = () => {
    if (window.scrollY >= 650) {
      setNavbar(true);
      setBlackLogo(true);
    } else {
      setNavbar(false);
      setBlackLogo(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <Nav className={navbar ? 'active' : ''}>
      <div className={blackLogo ? 'logo black' : 'logo'}>
      Borealis<span>.</span>
      </div>
      <NavBurger action={action} pages={pages} />
    </Nav>
  );
};

export default Navbar;