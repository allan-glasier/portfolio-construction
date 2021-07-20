import { createGlobalStyle } from "styled-components";
// Common screen sizes
// Mobile: 360 x 640
// Mobile: 375 x 667
// Mobile: 360 x 720
// iPhone X: 375 x 812
// Pixel 2: 411 x 731
// Tablet: 768 x 1024
// Laptop: 1366 x 768
// High-res laptop or desktop: 1920 x 1080

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #EF442F;
    --transparentBlack: rgba(46, 46, 46, 0.7);
    --black: #2E2E2E;
    --blue: #1C2837;
    --white: #F5F5F5;
    --grey: #788585;
  }  

  body {
    background: var(--white);    
  }

  .container {
    width: 1366px;    
    margin: 0 auto;
  }
`;

export default GlobalStyles;
