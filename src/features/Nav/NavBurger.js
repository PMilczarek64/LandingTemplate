import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 22.5px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 2rem;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    color: ${({ open, theme }) => open ? theme.colors.lightGrey : theme.colors.detailGreen};
    
  }
`;

const NavBurger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div>
        <i class="fa fa-bars"></i>
        </div>
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default NavBurger;