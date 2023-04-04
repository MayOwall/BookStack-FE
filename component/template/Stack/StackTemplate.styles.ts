import styled from "@emotion/styled";

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
  height: 100%;
  padding: 20px;
  padding-top: 60px;

  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  > div:first-of-type {
    flex-shrink: 0;
  }
  > div:last-of-type {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    width: 100%;
    height: 1px;
  }
`;
