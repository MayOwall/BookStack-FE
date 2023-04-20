import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color[2]}88;
  background-color: ${({ theme }) => theme.color[1]};
  display: flex;
  gap: 10px;

  > div:first-of-type {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

export const Date = styled.div`
  color: ${({ theme }) => theme.color[3]};
  font: ${({ theme }) => theme.font["xsmall-light"]};
`;

export const Quote = styled.div`
  width: 100%;
  font: ${({ theme }) => theme.font["xsmall-bold"]};
`;

export const Note = styled.div`
  font: ${({ theme }) => theme.font["xsmall-light"]};
  color: ${({ theme }) => theme.color[2]};
`;

export const Page = styled.div`
  color: ${({ theme }) => theme.color[2]};
  font: ${({ theme }) => theme.font["xsmall-light"]};
`;

export const MeatballContainer = styled.div`
  box-sizing: content-box;
  position: relative;
  top: -3px;
  padding: 3px;
  height: fit-content;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: none;
  border-radius: 50%;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.color[2]}44;
  }
`;
