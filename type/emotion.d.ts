import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    font: {
      "x-small-bold": string;
      "x-small-light": string;
      "small-bold": string;
      "small-light": string;
      "medium-bold": string;
      "medium-light": string;
      "large-bold": string;
      "large-light": string;
    };
    color: {
      white: string;
      lightgray: string;
      darkgray: string;
      black: string;
      alert: string;
    };
    borderRadius: {
      atom: string;
      molecule: string;
      organism: string;
    };
  }
}
