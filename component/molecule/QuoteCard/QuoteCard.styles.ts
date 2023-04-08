import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  padding: 15px;
  padding-right: 45px;
  border-radius: 10px;
  border: 1px solid;
  background-color: ${({ theme }) => theme.color.white};
`;

export const Quote = styled.div`
  font: ${({ theme }) => theme.font["small-bold"]};
  font-size: 14px;
  font-weight: 600;
`;

export const Page = styled.small`
  margin-top: 2px;
  display: block;
  font: ${({ theme }) => theme.font["small-light"]};
  color: ${({ theme }) => theme.color.lightgray};
`;

export const DeleteButton = styled.div`
  position: absolute;
  top: 15px;
  right: 10px;
  padding: 1px;
  cursor: pointer;
  border-radius: 50%;
  transition: 0.2s ease-out all;

  :hover {
    background-color: ${({ theme }) => theme.color.lightgray}55;
  }
`;
