import { createGlobalStyle } from "styled-components";

export const NormalizeStyle = createGlobalStyle`
    body,
    html,
    div,
    dl,
    dt,
    dd,
    ul,
    ol,
    li,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    pre,
    form,
    fieldset,
    input,
    textarea,
    p,
    blockquote,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    figcaption,
    figure,
    footer,
    header,
    menu,
    nav,
    section,
    summary,
    time,
    mark,
    audio,
    video,
    button {
        margin: 0;
        padding: 0;
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    menu,
    nav,
    section,
    main,
    time {
        display: block;
    }

    address,
    caption,
    cite,
    code,
    dfn,
    th,
    var,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-style: normal;
        font-weight: normal;
    }

    fieldset,
    img,
    button,
    abbr,
    acronym {
        border: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    ol,
    ul {
        list-style: none;
    }

    caption,
    th {
        text-align: left;
    }

    sup {
        font-size: 0.7em;
        vertical-align: super;
        line-height: 0;
    }

    strong {
        font-weight: 500;
    }

    input {
        &[type="number"] {
            -moz-appearance: textfield;

            &::-webkit-inner-spin-button {
                display: none;
            }
        }

        &[type="text"] {
            -webkit-appearance: none;
        }
    }

    button {
        text-align: left;
    }

    textarea {
        -webkit-appearance: none;
    }

    img {
        display: block;
    }

    * {
        box-sizing: border-box;
    }

    *:focus {
        outline: none;
    }

    ::-ms-clear {
        display: none;
    }
`;
