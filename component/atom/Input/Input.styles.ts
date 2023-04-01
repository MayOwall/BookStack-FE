import { ELabelProps, EInputProps, ELineProps, EAlertProps } from "type";
import styled from "@emotion/styled";

export const Container = styled.div<EInputProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${({ width }) => width || "100%"};
  height: fit-content;
`;

export const Label = styled.label<ELabelProps>`
  font: ${({ theme }) => theme.font["small-bold"]};
  font-size: ${({ fontSize }) => fontSize || "13px"};
  font-weight: ${({ isFocus }) => (isFocus ? 700 : 300)};
  transition: 0.3s ease-in all;
`;

export const Input = styled.input<EInputProps>`
  width: 100%;
  padding: 8px 0;
  font: ${({ theme }) => theme.font["small-light"]};
  font-size: ${({ fontSize }) => fontSize || "13px"};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightgray};
  outline: none;
  transition: 0.2s ease-in all;

  ::placeholder {
    opacity: 50%;
  }
`;

export const Line = styled.div<ELineProps>`
  position: absolute;
  bottom: 16px;
  left: 0;
  width: ${({ isFocus }) => (isFocus ? "100%" : "0")};
  transition: 0.2s ease-in all;
  height: 2px;
  background-color: ${({ theme }) => theme.color.black};
`;

export const Alert = styled.small<EAlertProps>`
  font: ${({ theme }) => theme.font["x-small-light"]};
  color: ${({ theme }) => theme.color.alert};
  visibility: ${({ isAlert }) => (isAlert ? "visible" : "hidden")};
`;
