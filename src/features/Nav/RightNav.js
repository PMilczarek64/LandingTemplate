import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row;
  z-index: 2;
  li {
  padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${({ theme }) => theme.colors.detailGreen};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100%;
    width: 250px;
    padding-top: 3.5rem;
    opacity: 0.95;
    transition: transform 0.3s ease-in-out;

    li {
      color: white;
    }
  }
`;



const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a href="/">HOME</a></li>
      <li><a href="/">ABOUT</a></li>
      <li><a href="/">WORK</a></li>
      <li><a href="/">SERVICES</a></li>
      <li><a href="/">BLOG</a></li>
    </Ul>
  );
};

export default RightNav;