import styled from 'styled-components';
import Aurora from '../../images/Aurora.jpg';

export const Container = styled.div`
max-width: 100%;
height: auto;
margin: 0;
padding: 0;
`;

export const Header = styled.div`
  position: relative;
  height: 680px;
  background-image:  url(${Aurora});
  background-size: cover;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.colors.lightGrey};
  padding-inline: 50px;
`;

export const Inner = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 0;
  .main {
    font-weight: 200;
    span {
      font-weight: bold;
    }
    font-size: 50px;
    margin-bottom: 25px;
    color: ${({ theme }) => theme.colors.white};
  }
  .description {
    font-size: 24px;
    margin-bottom: 35px;
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (max-width: 800px) {
    .main, .description {
    transform: scale(0.7);
    }
  }
 
`;