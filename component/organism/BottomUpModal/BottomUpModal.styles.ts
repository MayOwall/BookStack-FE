import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50vw);
  }to {
    opacity: 100%;
    transform: translateY(0)
  }
`;

export const Background = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color[3]}88;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  height: fit-content;
  padding: 50px 32px;
  background-color: white;
  border-radius: 30px 30px 0 0;
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-out forwards;
`;

export const Item = styled.div`
  font: ${({ theme }) => theme.font["medium-light"]};
  color: ${({ theme }) => theme.color[3]};
  cursor: pointer;
  transition: 0.2s ease-out all;

  :hover {
    color: ${({ theme }) => theme.color[4]};
  }
`;
