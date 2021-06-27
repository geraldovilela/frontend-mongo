import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body{
    
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing:antialised;
    background:#f1f1f1;     
  }

  button {
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor:not-allowed;
  }
`