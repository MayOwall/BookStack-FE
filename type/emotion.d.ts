import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    font: {
      "xsmall-light": string;
      "xsmall-bold": string;
      "small-light": string;
      "small-bold": string;
      "medium-light": string;
      "medium-bold": string;
      "large-light": string;
      "large-bold": string;
      "xlarge-light": string;
      "xlarge-bold": string;
      "xxlarge-light": string;
      "xxlarge-bold": string;
      medium2: string;
      medium: string;
    };
    color: {
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      alert: string;
      main: string;
      main2: string;
    };
  }
}
