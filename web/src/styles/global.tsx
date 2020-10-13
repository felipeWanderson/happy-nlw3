import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    font-size: 62.5%; /* 1rem = 10px */
    height: 100%;
  }
  body {
    color: #fff;
    background: #ebf2f5;
    text-rendering: optimizeLegibility!important;
    -webkit-font-smoothing: antialiased!important;
    -moz-osx-font-smoothing: grayscale;
  }
  body, input, button, textarea {
    font: 600 1.8rem Nunito, sans-serif;
  }
    
  input, button {
    cursor: pointer;
  }
`;

export default GlobalStyle;