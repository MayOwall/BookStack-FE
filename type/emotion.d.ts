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
    };
    color: {
      light: {
        1: string;
        2: string;
        3: string;
        4: string;
      };
      dark: {
        1: string;
        2: string;
        3: string;
        4: string;
      };
      alert: string;
    };
  }
}
