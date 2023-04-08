import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const StackContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
  position: relative;
  width: 100%;
  z-index: 2;
`;

// Quote 및 하위 JSX들
export const QuoteContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  gap: 16px;
`;

export const StackDate = styled.div`
  position: relative;
  width: 90px;
  height: 24px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};
  border-radius: 30px;
  font: ${({ theme }) => theme.font["small-light"]};
  line-height: 23px;
  text-align: center;
`;

// Line 및 하위 JSX
export const LineContainer = styled.div`
  position: absolute;
  top: 0;
  left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;

  width: 10px;
  height: calc(100% + 30px);
`;

export const Line = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.color.black};
`;

export const Dot = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.color.black};
  border-radius: 50%;
`;
