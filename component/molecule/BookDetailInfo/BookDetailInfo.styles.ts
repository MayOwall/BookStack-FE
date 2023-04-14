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
`;

export const AuthPubContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;

  > small {
    font: ${({ theme }) => theme.font["small-light"]};
  }
`;

export const Detail = styled.p`
  width: 100%;
  min-height: 150px;
  color: ${({ theme }) => theme.color[3]};
  font: ${({ theme }) => theme.font["small-light"]};
`;
