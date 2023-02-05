import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`    
  ${reset}   
  html {
    font-family : "nanum";
    font-size: 62.5%;
  }
  body {
    background-color: #f6f6f6
  }
  #root {
    min-height: 100vh;
    margin:0 auto;
    padding:0 2rem;   
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    @media screen and (min-width: 650px) {
      width: 64rem;
    }
    @media screen and (max-width: 650px) {
      width: 80vw;
    }
  }    
`;

export default GlobalStyle;
