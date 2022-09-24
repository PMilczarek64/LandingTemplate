import styled from 'styled-components';

export const Container = styled.div`
max-width: 100%;
height: auto;
margin: 0;
padding: 0;
`;

export const Header = styled.div`
  position: relative;
  height: 680px;
  background-image:  url("https://images.pexels.com/photos/258112/pexels-photo-258112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.colors.lightGrey};
  padding-inline: 50px;
  
`;

export const Navbar = styled.nav`
  width: 100%;
  height: 50px;
  
  position: relative;
  padding: 0;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 32px;
    padding-block: 20px;
    padding-inline: 14%;
    span {
      color: ${({ theme }) => theme.colors.detailGreen};
    }
  }
    ul {
      padding-block: 32px;
      padding-inline: 4%;
    }
    li {
      display: inline-flex;
      margin-inline: 10px;
    }
    @media screen and (max-width: 800px) {
    ul {
      display: none;
    }
  }
`;

export const Inner = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.lightGrey};
  text-align: center;
  z-index: 0;
  .main {
    font-weight: 200;
    span {
      font-weight: bold;
    }
    font-size: 50px;
    margin-bottom: 10px;
  }
  .description {
    font-size: 24px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 800px) {
    .main, .description {
    transform: scale(0.7);
    }
  }
 
`;