import styled from "@emotion/styled";

export const Container = styled.div`
  color: ${({ theme }) => theme.color[2]};
`;

export const No = styled.div`
  margin-bottom: 20px;
  font: ${({ theme }) => theme.font["large-light"]};
`;

export const Date = styled.div`
  font: ${({ theme }) => theme.font["small-light"]};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color[4]};
  font: ${({ theme }) => theme.font["xxlarge-bold"]};
  margin-bottom: 20px;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;

  > div:first-of-type {
    width: calc(100% - 120px);

    small {
      display: block;
      font: ${({ theme }) => theme.font["small-light"]};
      color: ${({ theme }) => theme.color[3]};
    }
  }
`;

export const Author = styled.small`
  margin-bottom: 5px;
`;

export const Publisher = styled.small`
  margin-bottom: 20px;
`;

export const Detail = styled.p`
  width: 100%;
  min-height: 150px;
  color: ${({ theme }) => theme.color[3]};
  font: ${({ theme }) => theme.font["small-light"]};
`;

export const BookImage = styled.div`
  position: relative;
  width: 100px;
  height: 140px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color[2]}44;

  img {
    object-fit: cover;
    border-radius: 5px;
  }
`;
