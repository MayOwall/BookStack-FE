import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.color[1]};
  padding-bottom: 100px;

  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CoverContainer = styled.div`
  width: 100%;
  height: 230px;
  background-color: ${({ theme }) => theme.color[2]};
  margin-bottom: 50px;
`;

export const BookInfoContainer = styled.div`
  width: calc(100% - 64px);
  z-index: 1;
  background-color: ${({ theme }) => theme.color[1]};
  position: relative;
  margin-bottom: 50px;

  svg {
    margin-bottom: 20px;
  }
`;

export const BackIconBackground = styled.div`
  position: absolute;
  left: -6.5px;
  top: -5px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color[4]}22;
  opacity: 0;
  transition: 0.2s ease-out all;
  cursor: pointer;

  :hover {
    opacity: 100%;
  }
`;
