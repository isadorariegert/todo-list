import { createGlobalStyle } from 'styled-components';

export const colors = {
  primaryYellow: '#FFC93F',
};

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  body {
    background: #222;
    color: #fff;
  }
  
  body, input {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`;
