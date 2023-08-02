import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font: 400 1rem 'Nunito', sans-serif;
    background-color: rgb(255, 255, 255);
    -webkit-font-smoothing: antialiased;
  }

  h1 {
    font-size: 3em;
    font-weight: bold;
    line-height: 1.1;
    color: #1f1f1f;
  }
`;

export default GlobalStyles;
