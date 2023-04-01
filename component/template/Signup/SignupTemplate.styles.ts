import styled from "@emotion/styled";
export const Container = styled.main`
  width: calc(100% - 130px);
  height: fit-content;
`;

export const Header = styled.div`
  & > h1 {
    font: ${({ theme }) => theme.font["medium-bold"]};
  }
  & > h2 {
    font: ${({ theme }) => theme.font["medium-light"]};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 326px;
  margin-top: 54px;
`;

export const Buttons = styled.div`
  text-align: center;
  margin-top: 30px;

  > small {
    display: block;
    color: ${({ theme }) => theme.color.lightgray};
    margin-top: 16px;
    font: ${({ theme }) => theme.font["small-light"]};

    a {
      text-decoration: none;
    }
    span {
      margin-left: 4px;
      color: ${({ theme }) => theme.color.darkgray};
    }
  }
`;
