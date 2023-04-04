import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  padding-right: 10px;
`;

export const Year = styled.div`
  font: ${({ theme }) => theme.font["medium-bold"]};
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
