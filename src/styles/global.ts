import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: sans-serif;
        color: #19090c;
        background-color: #f5f5f5;
    }

    body, html {
        height: 100%;
        width: 100%;
    }

    #root {
        height: 100%;
    }
`
