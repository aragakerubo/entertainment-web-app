import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --pure-white: #ffffff;
        --red: #fc4747;
        --dark-blue: #10141e;
        --greyish-blue: #5a698f;
        --semi-dark-blue: #161d2f;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: var(--dark-blue);
        transition: all 0.50s linear;
        -ms-overflow-style: none;
        scrollbar-width: none;

        h1, h2, h3, p, a, input {
            margin: 0;
            font-family: 'Outfit', Verdana , sans-serif;
            font-style: normal;
            color: var(--pure-white);
        }

        a {
            text-decoration: none;
        }

        input {
            caret-color : var(--red);
            border: none;
            background-color: transparent;
            outline: none;
        }

        .heading-l {
            font-weight: 300;
            font-size: 32px;
            line-height: 40px;
            letter-spacing: -0.5px;
        }

        .heading-m {
            font-weight: 300;
            font-size: 24px;
            line-height: 30px;
        }

        .heading-s {
            font-weight: 500;
            font-size: 24px;
            line-height: 30px;
        }

        .heading-xs {
            font-weight: 500;
            font-size: 18px;
            line-height: 23px;
        }

        .body-m {
            font-weight: 300;
            font-size: 15px;
            line-height: 19px;
        }

        .body-s {
            font-weight: 300;
            font-size: 13px;
            line-height: 16px;
            opacity: 0.75;
        }

        button.primary {
            font-weight: 300;
            font-size: 15px;
            line-height: 19px;
            text-align: center;
            color: var(--pure-white);
            background-color: var(--red);
            border-radius: 6px;
            border: none;
            cursor: pointer;
        }

        button.primary:hover {
            color: var(--semi-dark-blue);
            background-color: var(--pure-white);
        }
    }
    `;
