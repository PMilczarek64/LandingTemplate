import React from "react";
import styled from "styled-components";
import NavBurger from "./NavBurger";

const Nav = styled.nav`

  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;

  .logo {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    span {
      color:${({ theme }) => theme.colors.detailGreen};
    }
    @media (min-width: 768px) {
      padding: 0 100px;
    }
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
      Alecto<span>.</span>
      </div>
      <NavBurger />
    </Nav>
  );
};

export default Navbar;