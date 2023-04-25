import styled from "@emotion/styled";

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  padding: 0 32px;
  background-color: ${({ theme }) => theme.color[1]};
  text-align: center;
  z-index: 1;

  h1 {
    font: ${({ theme }) => theme.font["xlarge-bold"]};
  }

  small {
    margin: 30px 0 10px 0;
    font: ${({ theme }) => theme.font["small-light"]};
  }
`;
