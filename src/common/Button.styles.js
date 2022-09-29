import styled from "styled-components";

export const Button = styled.button`
  min-width: 180px;
  min-height: 50px;
  border-style: solid;
  border-radius: 25px;
  background: none;
  color: white;
  border-color: white;
  padding-inline: 35px;
  padding-block: 0;
  margin-block: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.l};
  :hover {
    transform: scale(1.05);
    transition: 0.3s ease-in-out;
    box-shadow: 0px 0px 40px -1px rgba(255, 255, 255, 1);
    cursor: pointer;
    background: rgba(255, 254, 254, 0.376);
    transition: 0.4s ease-in-out;
  }
`;