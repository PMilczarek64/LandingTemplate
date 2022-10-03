import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row;
  z-index: 2;
  padding-right: 20px;
  li {
  padding: 18px 10px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 3px;
  cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${({ theme }) => theme.colors.detailGreen};
    text-align: start;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    padding-top: 3.5rem;
    opacity: 0.95;
    transition: transform 0.3s ease-in-out;
    padding-top: 45vh;
    li {
      color: white;
      font-size: 40px;
      padding-left: 50px;
      padding-block: 50px;
    }
  }
`;



const RightNav = ({ open, action, pages }) => {
  return (
    <Ul open={open}>
      <li onClick={() => action(pages.home)}>HOME</li>
      <li onClick={() => action(pages.about)}>ABOUT</li>
      <li onClick={() => action(pages.work)}>WORK</li>
      <li onClick={() => action(pages.team)}>TEAM</li>
      <li onClick={() => action(pages.services)}>SERVICES</li>
    </Ul>
  );
};

export default RightNav;