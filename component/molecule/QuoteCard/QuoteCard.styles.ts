import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color[2]}88;
  background-color: ${({ theme }) => theme.color[1]};
  display: flex;
  gap: 20px;

  > div:first-of-type {
    flex-grow: 1;
  }
`;

export const Quote = styled.div`
  margin-bottom: 10px;
  width: 100%;
  font: ${({ theme }) => theme.font["xsmall-bold"]};
  font-size: 14px;
  font-weight: 600;
`;

export const Note = styled.div`
  margin-bottom: 5px;
  width: 100%;
  font: ${({ theme }) => theme.font["xsmall-light"]};
  color: ${({ theme }) => theme.color[2]};
`;

export const Page = styled.small`
  margin-top: 2px;
  display: block;
  font: ${({ theme }) => theme.font["xsmall-light"]};
  color: ${({ theme }) => theme.color[2]};
`;

export const MeatballIconBackground = styled.div`
  position: absolute;
  right: 15px;
  top: 10px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color[4]}22;
  transition: 0.2s ease-out all;
  opacity: 0;
  cursor: pointer;

  :hover {
    opacity: 100%;
  }
`;
