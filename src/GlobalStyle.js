import styled, { createGlobalStyle } from "styled-components";
import Variables from "./Variables";

const GlobalStyle = createGlobalStyle`
  ${Variables};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: var(--font-main);
  }

  body {
    background-color: var(--clr-background);
  }

  a {
    text-decoration: none;
  }

  p, a {
    color: var(--clr-text);
  }

  h1 {
    font-size: 1.8rem;
    color: #000;
  }

  h2 {
    font-size: 0.8rem;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }

`;

export default GlobalStyle;
