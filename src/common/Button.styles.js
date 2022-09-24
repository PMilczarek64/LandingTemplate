import styled from "styled-components";

export const Button = styled.button`
  border-style: solid;
  border-radius: 20px;
  background: none;
  color: white;
  border-color: white;
  padding-inline: 35px;
  padding-block: 10px;
  margin-block: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  :hover {
    transform: scale(1.05);
    transition: 0.3s ease-in-out;
    box-shadow: 0px 0px 17px -1px rgba(255, 255, 255, 1);
    cursor: pointer;
  }
`;