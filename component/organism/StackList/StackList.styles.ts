import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  } 100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

interface EProps {
  stackType: "stack" | "shelf";
}

interface EStackContainerProps {
  index: number;
}

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const ButtonContainer = styled.div<EProps>`
  width: 100%;
  height: 52px;
  div {
    transition: none;
  }
`;

export const Year = styled.div`
  font: ${({ theme }) => theme.font["medium-bold"]};
  margin-bottom: 10px;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
  width: 100%;
  padding: 40px 0;
  transition: 0.3s ease-out all;
`;

export const StackContainer = styled.div<EStackContainerProps>`
  opacity: 0;
  animation: ${fadeIn} 0.7s ease-out ${({ index }) => index * 0.5}s forwards;
`;
