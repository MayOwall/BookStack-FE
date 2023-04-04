import styled from "@emotion/styled";

interface EProps {
  stackType: "stack" | "shelf";
}
export const Container = styled.div`
  position: relative;
  width: calc(100% - 20px);
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
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-top: 40px;
`;
