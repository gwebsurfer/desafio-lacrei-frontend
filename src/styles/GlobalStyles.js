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
    background-color: rgb(255 255 255 / 1);
    -webkit-font-smoothing: antialiased;
  }

  h1 {
    font-family: inherit;
    font-size: 3rem;
    font-weight: 700;
    color: #1f1f1f;
  }

  button {
    font-family: inherit;
    font-size: 1.125rem;
    font-weight: 700;
    border: none;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
    transition: all 0.2s ease 0s;

    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }
  }

  .container {
    width: 100%;
    padding: 4rem 4rem 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .primary-button {
    padding: 0.75rem 2rem;
    background-color: rgb(1 135 98 / 1);
    color: rgb(255 255 255 / 1);
    flex-shrink: 0;
  }

  .secondary-button {
    padding: 0.625rem 2.75rem;
    background-color: rgb(255 255 255 / 1);
    color: rgb(1 135 98 / 1);
    flex-shrink: 0;
    border: 2px solid rgb(1 135 98 / 1);
  }
`;

export default GlobalStyles;
