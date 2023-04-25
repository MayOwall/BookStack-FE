import styled from "@emotion/styled";

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: calc(100% - 64px);
  height: 100%;
  padding: 80px 0;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
