import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Upper = styled.div`
  width: 100%;
  min-height: 300px;
  padding: 4rem 1rem 0;
  flex-grow: 1;
  background-image: url(https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbgUvLb%2FbtsgAUjKWTb%2FbXJxam4sUaSohTEtHD3Me0%2Fimg.png);
  background-size: cover;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: ${({ theme }) => theme.color[0]};
`;

export const Title = styled.h1`
  font: ${({ theme }) => theme.font.medium2};
`;

export const LoginBtn = styled.p`
  font: ${({ theme }) => theme.font.medium};
  cursor: pointer;
  text-decoration: none;
`;

export const Bottom = styled.div`
  width: 100%;
  padding: 2rem 1rem 4rem;
  flex-shrink: 0;
`;

export const Comment = styled.p`
  font: 300 2rem "Noto Sans KR";
  color: ${({ theme }) => theme.color[3]};
  margin-bottom: 2rem;

  strong {
    color: ${({ theme }) => theme.color[5]};
  }
`;
