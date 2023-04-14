import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CoverContainer = styled.div`
  width: 100%;
  height: 230px;
  background-color: ${({ theme }) => theme.color[2]};
  margin-bottom: 50px;
`;

export const DetailContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color[1]};
  width: calc(100% - 64px);
  height: fit-content;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  gap: 80px;
  z-index: 1;
`;
