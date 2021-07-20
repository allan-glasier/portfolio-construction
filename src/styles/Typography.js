import { createGlobalStyle } from "styled-components";

import OpenSans from "../assets/fonts/OpenSans.ttf";

const Typography = createGlobalStyle`
  @font-face {
    font-family: OpenSans;
    src: url(${OpenSans});
    font-display: swap;
  }


  body {
    color: var(--white);    
  }

  p {
    font-family: OpenSans, arial, sans-serif;
    font-size: 1rem;
    letter-spacing: 2px;
  }

  h1 {
    margin: 0;
    font-size: 2rem;
    font-family: nippori, sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  h2, h3 {
    font-family: good-times, sans-serif;
    font-style: normal;    
  }

  h2 {
    font-size: 1.5rem;    
    font-weight: 400;
    letter-spacing: 5px;
  }

  h3{
    font-size: 1.25rem;    
    font-weight: 300;
    letter-spacing: 4px;    
  }

  a {
    font-family: good-times, sans-serif;
    font-weight: 300;
    font-style: normal;
    text-decoration: none;    
    font-size: .8rem;
    letter-spacing: 2px;
    color: var(--black);
  }

  .center {
    text-align: center;
  }

  .section-title {
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--black);
    margin-bottom: 4rem;        
    filter: drop-shadow(0px 0px 1.5px var(--black));
  }
`;

export default Typography;
