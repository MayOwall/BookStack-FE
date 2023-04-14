import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  } 100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  color: ${({ theme }) => theme.color[4]};
`;

export const Stacks = styled.div`
  margin-top: 30px;
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font: ${({ theme }) => theme.font["medium-bold"]};
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 10px;

  > svg {
    cursor: pointer;
  }
`;

export const StackContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 30px;
  margin-top: 10px;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  > h4 {
    font: ${({ theme }) => theme.font["medium-bold"]};
  }
`;

export const StackBookContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
  width: 100%;
`;

export const StackBook = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color[2]}88;
  transition: 0.2s ease-out all;
  cursor: pointer;

  :hover {
    border: 1px solid;
  }
  :hover img {
    filter: grayscale(0);
  }

  > div:first-of-type {
    width: 1px;
    flex-grow: 1;
    > span {
      font: ${({ theme }) => theme.font["medium-light"]};
    }

    > h5 {
      width: 100%;
      margin: 10px 0 5px;
      font: ${({ theme }) => theme.font["large-bold"]};
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    > small {
      display: block;
      color: ${({ theme }) => theme.color[2]};
      font: ${({ theme }) => theme.font["small-light"]};
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;

export const BookImage = styled.div`
  flex-shrink: 0;
  height: 107px;
  aspect-ratio: 1 / 1.4;
  border: 1px solid ${({ theme }) => theme.color[2]}44;
  border-radius: 5px;
  position: relative;

  img {
    border-radius: 5px;
    filter: grayscale(100%);
    transition: 0.2s ease-out all;
  }
`;

export const ShelfBookContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: left;
  flex-wrap: wrap-reverse;
  gap: 12px;
`;

export const ShelfBook = styled.div`
  position: relative;
  width: calc(33% - 8px);
  aspect-ratio: 1 / 1.4;
  border: 1px solid ${({ theme }) => theme.color[2]}44;
  border-radius: 5px;
  transition: 0.2s ease-out all;
  cursor: pointer;

  :hover {
    border: 1px solid ${({ theme }) => theme.color[4]};
  }

  :hover img {
    filter: grayscale(0);
  }

  img {
    border-radius: 5px;
    filter: grayscale(100%);
    transition: 0.2s ease-out all;
  }
  span {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    padding-top: 50px;
    font: ${({ theme }) => theme.font["small-light"]};
    color: ${({ theme }) => theme.color[2]};
  }
`;
