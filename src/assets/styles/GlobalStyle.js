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
  font-size: ${({ theme }) => theme.fontSize.xxl};
}

a {
  color: ${({ theme }) => theme.colors.lightGrey};
  text-decoration: none;
}

@media only screen and (max-width: 400px) {
      p {
        font-size: 18px;
      }
  }

`;