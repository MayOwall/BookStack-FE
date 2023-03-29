import styled from "@emotion/styled";

interface IButtonProps {
  type: "fill" | "dash" | "line" | "gray";
}

export const Button = styled.div<IButtonProps>`
  width: 100%;
  height: 30px;
  padding: 0 10px;
  border: none;
  border: ${({ type, theme }) => {
    switch (type) {
      case "fill": {
        return `1px solid ${theme.color.white}`;
      }
      case "dash": {
        return `1px dashed ${theme.color.black}`;
      }
      case "line": {
        return `1px solid ${theme.color.black}`;
      }
      case "gray": {
        return `1px solid ${theme.color.lightgray}`;
      }
    }
  }};
  border-radius: 15px;
  background-color: ${({ type, theme }) => {
    switch (type) {
      case "fill": {
        return theme.color.black;
      }
      case "dash":
      case "line":
      case "gray": {
        return theme.color.white;
      }
    }
  }};
  color: ${({ type, theme }) => {
    switch (type) {
      case "fill": {
        return theme.color.white;
      }
      case "dash":
      case "line": {
        return theme.color.black;
      }
      case "gray": {
        return theme.color.lightgray;
      }
    }
  }};
  font: ${({ theme }) => theme.font["small-light"]};
  text-align: center;
  line-height: 28px;
  letter-spacing: 1px;
  transition: all ease-in 0.15s;

  &:active {
    border: ${({ type, theme }) => {
      switch (type) {
        case "fill": {
          return `1px solid ${theme.color.white}dd`;
        }
        case "dash": {
          return `1px dashed ${theme.color.black}dd`;
        }
        case "line": {
          return `1px solid ${theme.color.black}dd`;
        }
        case "gray": {
          return `1px solid ${theme.color.darkgray}`;
        }
      }
    }};
    background-color: ${({ type, theme }) => {
      switch (type) {
        case "fill": {
          return theme.color.black + "dd";
        }
        case "dash":
        case "line":
        case "gray": {
          return theme.color.lightgray;
        }
      }
    }};
    color: ${({ type, theme }) => {
      switch (type) {
        case "fill": {
          return theme.color.white;
        }
        case "dash":
        case "line": {
          return theme.color.black + "dd";
        }
        case "gray": {
          return theme.color.darkgray;
        }
      }
    }};
  }
`;
