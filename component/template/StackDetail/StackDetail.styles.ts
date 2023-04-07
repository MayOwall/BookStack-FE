import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  height: 100%;
  padding: 60px 30px;

  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const BannerContainer = styled.div``;

export const DetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;
