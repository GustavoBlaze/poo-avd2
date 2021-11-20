import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --color-black: #000;
    --color-white: #fff;

    --color-gray-500: #718096;
    --color-gray-400: #a0a3c0;
    --color-gray-300: #cbd5e0;
    --color-gray-200: #e2e8f0;
    --color-gray-100: #edf2f7;
    --color-gray-50: #f7fafc;

    --color-blue-600: #2A69AC;
    --color-blue-500: #3182ce;
    --color-blue-400: #4299e1;
    --color-blue-300: #63b3ed;
    --color-blue-200: #90CDF4;
    --color-blue-100: #ceedff;
    --color-blue-50: #ebf8ff;

    --color-red-600: #c53030;
    --color-red-500: #e53e3e;
  }

  button {
    border: 0;
    background: transparent;
    transition: all 0.3s ease-in-out;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;
