import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid;

  width: 100%;
  height: 100%;

  color: ${({ theme }) => theme.color.black};

  span {
    margin-top: 9px;
    font: ${({ theme }) => theme.font["small-light"]};
  }
`;

export const TitleStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  > div {
    font: ${({ theme }) => theme.font["medium-bold"]};
  }
`;

export const ButtonContainer = styled.div`
  width: 130px;
  margin-top: 90px;
  > div {
    width: 100%;
  }
  > div:first-of-type {
    margin-bottom: 10px;
  }
`;
