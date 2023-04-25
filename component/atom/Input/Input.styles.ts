import { ELineProps, EAlertProps } from "type";
import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
`;

export const Label = styled.label`
  font: ${({ theme }) => theme.font["small-bold"]};
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 0;
  font: ${({ theme }) => theme.font["medium-light"]};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color[4]};
  outline: none;
  transition: 0.2s ease-in all;

  ::placeholder {
    font: ${({ theme }) => theme.font["medium-light"]};
    color: ${({ theme }) => theme.color[2]};
  }
`;

export const Line = styled.div<ELineProps>`
  position: absolute;
  bottom: 19px;
  left: 0;
  width: ${({ isFocus }) => (isFocus ? "100%" : "0")};
  transition: 0.2s ease-in all;
  height: 2px;
  background-color: ${({ theme }) => theme.color[4]};
`;

export const Alert = styled.small<EAlertProps>`
  font: ${({ theme }) => theme.font["small-light"]};
  color: ${({ theme }) => theme.color.alert};
  visibility: ${({ isAlert }) => (isAlert ? "visible" : "hidden")};
`;
