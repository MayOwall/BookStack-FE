import { EInputProps, ELineProps } from "type";
import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: fit-content;
  height: fit-content;
`;

export const Label = styled.label<EInputProps>`
  font: ${({ theme }) => theme.font["small-bold"]};
  font-size: ${({ fontSize }) => fontSize || "13px"};
`;

export const Input = styled.input<EInputProps>`
  width: ${({ width }) => width || "100%"};
  padding: 8px 0;
  font: ${({ theme }) => theme.font["small-light"]};
  font-size: ${({ fontSize }) => fontSize || "13px"};
  border: none;
  border-bottom: 1px solid;
  outline: none;
  transition: 0.2s ease-in all;
`;

export const Line = styled.div<ELineProps>`
  position: absolute;
  bottom: -1px;
  left: 0;
  width: ${({ isFocus }) => (isFocus ? "100%" : "0")};
  transition: 0.2s ease-in all;
  height: 3px;
  background-color: ${({ theme }) => theme.color.black};
`;
