import styled from "@emotion/styled";

interface IButtonProps {
  width: "fill" | "hug";
  buttonType: "disabled" | "fill" | "vacant" | "alert";
}

export const Button = styled.button<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => {
    switch (width) {
      case "fill":
        return "100%";
      case "hug":
        return "fit-content";
    }
  }};
  height: 3rem;
  border-radius: 10px;
  cursor: pointer;

  border: ${({ theme, buttonType }) => {
    switch (buttonType) {
      case "vacant":
        return theme.color.main;
      default:
        return "none";
    }
  }};
  color: ${({ theme, buttonType }) => {
    switch (buttonType) {
      case "vacant":
        return theme.color.main;
      default:
        return theme.color[0];
    }
  }};
  background-color: ${({ theme, buttonType }) => {
    switch (buttonType) {
      case "disabled":
        return theme.color[2];
      case "fill":
        return theme.color.main;
      case "vacant":
        return theme.color[0];
      case "alert":
        return theme.color.alert;
    }
  }};

  :active {
    background-color: ${({ theme, buttonType }) => {
      switch (buttonType) {
        case "disabled" || "vacant":
          return theme.color[2];
        case "fill":
          return theme.color.main2;
        case "alert":
          return theme.color.alert;
      }
    }};
  }

  small {
    font: ${({ theme }) => theme.font.medium};
  }
`;
