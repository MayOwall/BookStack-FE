import styled from "@emotion/styled";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color[3]}88;
`;

export const Container = styled.div`
  width: calc(100% - 128px);
  height: fit-content;
  background-color: ${({ theme }) => theme.color[1]};
  padding: 40px 20px 30px;
  border-radius: 10px;
`;

export const Title = styled.h1`
  font: ${({ theme }) => theme.font["medium-bold"]};
  text-align: center;
`;

export const Content = styled.div`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.color[2]};
  font: ${({ theme }) => theme.font["small-light"]};
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
