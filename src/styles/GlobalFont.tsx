import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

import NanumPenRegular from "@assets/fonts/NanumPenScript-Regular.woff";
import YeonSungRegular from "@assets/fonts/YeonSung-Regular.woff";

const GlobalFont = createGlobalStyle`    
     @font-face {
        font-family: "nanum";
        src: local("nanum"), url(${NanumPenRegular}) format('woff'); 
        font-weight: normal;        
        font-display: swap;
    }
    @font-face {
        font-family: "yeonsung";
        src: local("yeonsung"), url(${YeonSungRegular}) format('woff');
        font-weight: normal;
        font-display: swap;
    }
`;

export default GlobalFont;
