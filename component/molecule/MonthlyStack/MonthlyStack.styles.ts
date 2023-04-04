import styled from "@emotion/styled";

export const Container = styled.div``;

export const Month = styled.h3`
  margin-bottom: 10px;
  font: ${({ theme }) => theme.font["medium-bold"]};
  font-size: 18px;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  border-left: 1px solid ${({ theme }) => theme.color.darkgray};
  padding: 10px 0;
  padding-left: 20px;
`;

export const Stack = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 100%;
  height: 150px;
  padding: 0 20px;
  border: 1px solid ${({ theme }) => theme.color.lightgray}88;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.2s ease-out all;

  :hover {
    border: 1px solid ${({ theme }) => theme.color.lightgray};
  }

  > div:first-of-type {
    flex-grow: 1;
    width: 1px;

    :hover ~ div img {
      filter: grayscale(0);
    }

    > h4 {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font: ${({ theme }) => theme.font["large-bold"]};
    }

    > small {
      width: 100%;

      span {
        font: ${({ theme }) => theme.font["small-light"]};
        color: ${({ theme }) => theme.color.lightgray};
        margin-right: 10px;
      }
    }

    > div {
      margin-top: 10px;
      font: ${({ theme }) => theme.font["small-light"]};
      font-size: 16px;
      color: ${({ theme }) => theme.color.lightgray};
    }
  }

  > div:last-of-type {
    position: relative;
    flex-shrink: 0;
    width: 70px;
    height: 100px;

    :hover img {
      filter: grayscale(0);
    }

    img {
      border: 1px solid ${({ theme }) => theme.color.lightgray}33;
      object-fit: cover;
      border-radius: 5px;
      filter: grayscale(1);
      transition: 0.2s ease-out filter;
    }
  }
`;

export const Shelf = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 18px;
  row-gap: 10px;
  width: 100%;
  height: fit-content;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-shrink: 0;
    width: calc(33% - 12px);
    aspect-ratio: 1 / 1.4;
    border: 1px solid ${({ theme }) => theme.color.lightgray}44;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.2s ease-out all;

    :hover {
      border: 1px solid ${({ theme }) => theme.color.lightgray};
    }
    :hover > h4 {
      color: ${({ theme }) => theme.color.darkgray};
    }
    :hover > img {
      filter: grayscale(0);
    }

    > h4 {
      width: 100%;
      padding: 10px;
      font: ${({ theme }) => theme.font["small-light"]};
      font-weight: 400;
      color: ${({ theme }) => theme.color.lightgray};
      text-align: center;
    }

    img {
      border-radius: 10px;
      object-fit: cover;
      filter: grayscale(1);
      transition: 0.2s ease-out all;
    }
  }
`;
