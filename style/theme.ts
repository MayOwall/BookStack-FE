import { Theme } from "@emotion/react";

const theme: Theme = {
  font: {
    "x-small-bold": "normal 900 11px Noto Sans KR",
    "x-small-light": "normal 300 11px Noto Sans KR",
    "small-bold": "normal 900 13px Noto Sans KR",
    "small-light": "normal 300 13px Noto Sans KR",
    "medium-bold": "normal 900 20px Noto Sans KR",
    "medium-light": "normal 300 20px Noto Sans KR",
    "large-bold": "normal 900 30px Noto Sans KR",
    "large-light": "normal 300 30px Noto Sans KR",
  },
  color: {
    white: "#ffffff",
    lightgray: "#E2E2E2",
    darkgray: "#5A5A5A",
    black: "#212121",
    alert: "#FF3131",
  },
  borderRadius: {
    atom: "4px",
    molecule: "10px",
    organism: "30px",
  },
};

export default theme;
