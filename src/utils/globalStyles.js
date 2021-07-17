import { createGlobalStyle } from "styled-components";
import GothamBookWoff2 from "../assets/fonts/Gotham-Book.woff2";
import GothamBoldWoff2 from "../assets/fonts/Gotham-Bold.woff2";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: 'Gotham Book';
    margin: 0;
    padding: 0;
}
html, body, #root
{
    height: 100%;
}
`;

export const FontStyles = createGlobalStyle`

@font-face {
    font-family: 'Gotham Book';
    src: url(${GothamBookWoff2}) format('woff2'),
}

@font-face {
    font-family: 'Gotham Bold';
    src: url(${GothamBoldWoff2}) format('woff2');
    font-weight: bold;
}
`;
