import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 220px;

  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CoverContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 250px;
`;

export const BookInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  z-index: 1;
  background-color: ${({ theme }) => theme.color.white};
  padding: 80px 40px 0;
`;
