import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  text-align: center;
}

h1 {
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  color: ${({ theme }) => theme.colors.darkGrey};
}

h2 {
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.xxl};
}

h3 {
  font-size: 26px;
  color: ${({ theme }) => theme.colors.darkGrey};
}

h4 {
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.xl};
}

p {
  color: ${({ theme }) => theme.colors.faded};
  line-height: 1.7;
}

a {
  color: ${({ theme }) => theme.colors.lightGrey};
  text-decoration: none;
}

@media only screen and (max-width: 500px) {
      p {
        font-size: 20px;
      }
  }

`;