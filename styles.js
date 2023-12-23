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
    margin: 20px auto;
  }

  h2 {
    font-size: 30px;
    margin: 0;
    color: black;
  }

  h3 {
    font-size: 20px;
    margin: 0;
    color: black;
  }

  p {
    font-size: 16px;
    margin-block-end: 5px;
    color: black;
  }

 

  a {
    text-decoration: none;
  }
`;
