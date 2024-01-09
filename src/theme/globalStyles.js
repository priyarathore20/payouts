import { createGlobalStyle } from "styled-components";

export const theme = {
  secondaryBlue: "#1E2640",
  primaryBlue: "#146EB4",
  gray1: "#353C53",
  white: "#FFF",
  black: "#000",
  black12: "#1A181E",
  black30: "#4d4d4d",
  black50: "#808080",
  black60: "#999",
  black85: "#d9d9d9",
  black90: "#E6E6E6",
  black95: "#f2f2f2",
};

export const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;
      scroll-behavior:smooth;
    }

    body {
      margin: 0;

      .App{
        display: flex;
      }
    }

    *,
    *::before,
    *::after {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: Inter, sans-serif;
    }
    
`;
