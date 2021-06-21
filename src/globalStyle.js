import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
  --light-bg-primary: #f0f3f8; //#d8f2fc;
  --light-bg-secondary: #fff;
  --dark-bg-primary: #07041C;
  --dark-bg-secondary: #13132B;
  --light-primary-text: #3c4a5b;
  --light-secondary-text: #68778d;
  --dark-primary-text: #DADBE0;
  --dark-secondary-text: #c1c2c7;
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
  color: ${({ theme }) =>
    theme.mode === "light"
      ? "var(--light-primary-text)"
      : "var(--dark-primary-text)"};
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
    background-color: ${({ theme }) =>
      theme.mode === "light"
        ? "var(--light-bg-primary)"
        : "var(--dark-bg-primary)"};
}

a{
  text-decoration: none;
  color: ${({ theme }) =>
    theme.mode === "light"
      ? "var(--light-primary-text)"
      : "var(--dark-primary-text)"};
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
