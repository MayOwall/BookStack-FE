import styled from "@emotion/styled";

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: calc(100% - 64px);
  height: calc(100% - 160px);
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CreateContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color[4]}88;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
