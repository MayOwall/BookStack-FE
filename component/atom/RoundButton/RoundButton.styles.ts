import { EButtonProps } from "@/type";
import styled from "@emotion/styled";

export const Button = styled.div<EButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  border: none;
  color: ${({ type, color, theme }) => {
    switch (type) {
      case "fill": {
        return theme.color.white;
      }
      default: {
        return color || theme.color.black;
      }
    }
  }};
  border: ${({ type }) => {
    switch (type) {
      case "fill": {
        return `none`;
      }
      case "dash": {
        return `1px dashed`;
      }
      case "line":
      default: {
        return "1px solid";
      }
    }
  }};
  border-radius: ${({ height }) =>
    height ? `${Number(height.replace(/[^0-9]/g, "")) / 2}px` : "50%"};
  background-color: ${({ type, color, theme }) => {
    return type === "fill" ? color || theme.color.black : theme.color.white;
  }};

  user-select: none;
  cursor: pointer;
  opacity: 100%;
  transition: all ease-in 0.15s;

  > div {
    position: relative;
    top: -1px;
    font: ${({ theme }) => theme.font["small-light"]};
    font-size: ${({ fontSize }) => fontSize || "13px"};
  }
  &:hover {
    opacity: 90%;
  }
  &:active {
    border: ${({ type, color, theme }) => {
      switch (type) {
        case "dash": {
          return `1px dashed ${color || theme.color.black}dd`;
        }
        case "line": {
          return `1px solid ${color || theme.color.black}dd`;
        }
      }
    }};
    background-color: ${({ type, color, theme }) => {
      switch (type) {
        case "fill": {
          return color ? color + "dd" : theme.color.black + "dd";
        }
        default: {
          return theme.color.lightgray + "dd";
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
      }
    }};
  }
`;
