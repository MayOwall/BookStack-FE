import styled from "@emotion/styled";
import { lightMode as theme } from "style";

interface Container {
  width: string;
}
export const Container = styled.button<Container>`
  width: ${({ width }) => width};
  border-radius: 10px;
  border: none;
  padding: 8px 10px;
  cursor: pointer;
  transition: 0.2s ease-out all;

  :hover {
    opacity: 80%;
  }
`;

export const ButtonStyle = {
  smallFill: {
    font: theme.font["small-light"],
    backgroundColor: theme.color[4],
    color: theme.color[1],
  },
  smallLine: {
    font: theme.font["small-light"],
    backgroundColor: theme.color[1],
    border: `1px solid`,
    color: theme.color[4],
  },
  largeFill: {
    font: theme.font["large-light"],
    backgroundColor: theme.color[4],
    color: theme.color[1],
  },
  largeLine: {
    font: theme.font["large-light"],
    backgroundColor: theme.color[1],
    border: `1px solid`,
    color: theme.color[4],
  },
};
