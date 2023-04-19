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
  align-items: center;
  gap: 10px;
  position: relative;

  width: 100%;

  > small {
    font: ${({ theme }) => theme.font["xsmall-light"]};
    color: ${({ theme }) => theme.color[2]};
  }
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
