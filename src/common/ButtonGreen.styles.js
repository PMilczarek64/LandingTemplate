import styled from "styled-components";

export const ButtonGreen = styled.button`
  border-style: solid;
  border-radius: 20px;
  color: white;
  padding-inline: 35px;
  padding-block: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 600;
  max-width: 170px;
  background-color: ${({ theme }) => theme.colors.detailGreen};
  margin: 0;
  border-color: transparent;
  :hover {
  transform: scale(1.05);
  transition: 0.3s ease-in-out;
  box-shadow: 0px 0px 17px -1px rgba(33, 209, 159);
  cursor: pointer;
  }
`;