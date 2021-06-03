import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
  --light-bg-primary: #f0f3f8; //#d8f2fc;
  --light-bg-secondary: #fff;
  --dark-bg-primary: #111827;
  --dark-bg-secondary: #1f2937;
  --light-primary-text: #3c4a5b;
  --light-secondary-text: #68778d;
  --brand-color: #EF8354;
}

*:not(i){
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, span{
  color: var(--light-primary-text);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
    background-color: var(--light-bg-primary);
}

a{
  text-decoration: none;
  color: var(--light-primary-text);
}

button{
  border: none;
  cursor: pointer;
}

img{
  width: 100%;
  height: auto;
}

`;
