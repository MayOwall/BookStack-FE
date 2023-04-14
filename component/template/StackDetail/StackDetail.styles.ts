import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: ${({ theme }) => theme.color[1]};
  padding-bottom: 30px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CoverContainer = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 230px;
  background-color: ${({ theme }) => theme.color[2]};
  margin-bottom: 50px;
`;

export const DetailContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color[1]};
  width: calc(100% - 64px);
  height: fit-content;
  margin-bottom: 50px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const BackIconBackground = styled.div`
  position: absolute;
  left: -7px;
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

export const MeatballIconBackground = styled.div`
  position: absolute;
  right: -4.5px;
  top: -4px;
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
