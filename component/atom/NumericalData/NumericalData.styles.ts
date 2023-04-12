import styled from "@emotion/styled";

export const Container = styled.div`
  user-select: none;
`;

export const Label = styled.div`
  color: ${({ theme }) => theme.color[4]};
  font: ${({ theme }) => theme.font["large-light"]};
`;

export const Data = styled.div`
  font: ${({ theme }) => theme.font["xxlarge-bold"]};
`;
