import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin:0;
    box-sizing: border-box
}

body{
    font-family: 'Anton', sans-serif;
    background: #1d1d1d;
    color: white;
}
a{
    text-decoration: none;
    color: white;
    transition: all ease 0.5s;
        &:hover {
          color: #c07d00;
          text-decoration: none;
        }
}
`;
