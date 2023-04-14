import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font: ${({ theme }) => theme.font["medium-bold"]};
`;

export const StackContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
  position: relative;

  width: 100%;
  z-index: 2;
`;

// Quote 및 하위 JSX들
export const QuoteContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
`;

export const StackDate = styled.span`
  width: fit-content;
  position: relative;
  padding: 3px 10px;
  color: ${({ theme }) => theme.color[1]};
  background-color: ${({ theme }) => theme.color[4]};
  border-radius: 30px;
  font: ${({ theme }) => theme.font["small-light"]};
`;

// Line 및 하위 JSX
export const LineContainer = styled.div`
  position: absolute;
  top: 80px;
  left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;

  width: 10px;
  height: calc(100% - 50px);
`;

export const Line = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.color[4]};
`;

export const Dot = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.color[4]};
  border-radius: 50%;
`;
