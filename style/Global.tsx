import { Global, css } from "@emotion/react";
import { reset } from "./reset";

const globalStyle = css`
  ${reset}
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: rgb(31, 31, 31);
    font-family: "Noto Sans KR", sans-serif;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  body > div {
    position: relative;
    display: flex;
    justify-content: center;
    height: 100%;
    aspect-ratio: 1 / 2;
  }

  @media (max-width: 450px) {
    body > div {
      position: relative;
      display: flex;
      justify-content: center;
      height: 100%;
      width: 100%;
    }
  }
`;

export default function GlobalStyle() {
  return <Global styles={globalStyle} />;
}
