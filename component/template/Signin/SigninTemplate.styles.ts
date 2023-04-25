import styled from "@emotion/styled";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 64px);
  height: 100%;
  padding-top: 100px;
`;

export const Header = styled.div`
  text-align: center;
  & > h1 {
    font: ${({ theme }) => theme.font["large-bold"]};
  }
  & > h2 {
    font: ${({ theme }) => theme.font["large-light"]};
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-top: 50px;
  width: 100%;
`;

export const Buttons = styled.div`
  margin-top: 30px;
  width: 100%;
  text-align: center;

  > div {
    margin-top: 10px;
    font: ${({ theme }) => theme.font["small-light"]};
    color: ${({ theme }) => theme.color[2]};
    a {
      text-decoration: none;
    }
    span {
      box-sizing: content-box;
      padding: 2px 5px;
      color: ${({ theme }) => theme.color[4]};
      border-radius: 3px;
      transition: 0.2s ease-out all;
      cursor: pointer;

      :hover {
        background-color: ${({ theme }) => theme.color[4]}22;
      }
    }
  }
`;
