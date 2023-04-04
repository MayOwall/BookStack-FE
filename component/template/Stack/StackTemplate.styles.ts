import styled from "@emotion/styled";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
    flex-grow: 1;
    width: 100%;
    height: 1px;
  }
`;
