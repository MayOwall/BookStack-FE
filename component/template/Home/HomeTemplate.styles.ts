import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    transform: translateY(10px);
    opacity: 0;
  } to {
    transform: translateY(0);
    opacity: 100%;
  }
`;

const buttonFadeIn = keyframes`
  from{
    opacity: 0;
  }to {
    opacity: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: fit-content;
  height: fit-content;
`;

interface ILogo {
  idx: number;
}

export const LogoContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 6px;
  p {
    font-family: "Noto Sans KR";
    font-size: 32px;
    font-weight: 900;
    -webkit-text-stroke: 2px ${({ theme }) => theme.color[4]};
    opacity: 0;
    user-select: none;
  }
`;

export const FillLogo = styled.p<ILogo>`
  color: ${({ theme }) => theme.color[4]};
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: ${({ idx }) => idx}s;
`;

export const LineLogo = styled.p<ILogo>`
  color: ${({ theme }) => theme.color[1]};
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: ${({ idx }) => idx * 0.2 + 1}s;
`;

export const Push = styled.div`
  opacity: 0;
  display: flex;
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: 2.8s;
  p {
    opacity: 100%;
    letter-spacing: 4px;
  }
  p:first-of-type {
    color: ${({ theme }) => theme.color[4]};
  }
  p:last-of-type {
    color: ${({ theme }) => theme.color[1]};
  }
`;
export const Own = styled.div`
  opacity: 0;
  display: flex;
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: 3s;
  p {
    opacity: 100%;
    letter-spacing: 6px;
  }
  p:first-of-type {
    color: ${({ theme }) => theme.color[1]};
  }
  p:last-of-type {
    color: ${({ theme }) => theme.color[4]};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  opacity: 0;

  animation: ${buttonFadeIn} 0.6s ease-out forwards;
  animation-delay: 4s;
`;
