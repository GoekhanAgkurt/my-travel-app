import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;

    :root{
    --primaryColor:#2a2f69;

  }
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  main {
    width: 90%;
    margin: 0 auto;
    background-color: gray;
  }
`;
