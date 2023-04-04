import styled from "@emotion/styled";

export const Container = styled.div`
  height: 65px;
`;

export const Label = styled.div`
  color: ${({ theme }) => theme.color.lightgray};
  font: ${({ theme }) => theme.font["medium-light"]};
`;

export const Data = styled.div`
  position: relative;
  top: -5px;
  font: ${({ theme }) => theme.font["large-bold"]};
  font-size: 30px;
  font-weight: 700;
`;
