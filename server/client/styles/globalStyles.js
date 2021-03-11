import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        
    }

    :root { 
       /* This defines wath 1rem is : 10 px / 16 px ( brwoser Default font-size : 16px )   */
      font-size: 10px;

      @media ${(props) => props.theme.breakpoints.down.xl} {
        font-size: 9px;
      }

      @media ${(props) => props.theme.breakpoints.down.lg} {
        font-size: 7px;
      }

    }

    html {
      font-size: 62.5%;
      min-height: 100%;
    }
    
    body {
      box-sizing: border-box;
      font-size: 1.4rem;
      font-weight: 400;
      font-style: normal;
      line-height: 2.4rem;
      background-color: #fff;
    }
`;
