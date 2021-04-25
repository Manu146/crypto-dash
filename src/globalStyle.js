import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
    background-color: #d8f2fc;
}

a{
  text-decoration: none;
  color: #3d3d3d;
}

button{
  border: none;
  cursor: pointer;
}

`;
