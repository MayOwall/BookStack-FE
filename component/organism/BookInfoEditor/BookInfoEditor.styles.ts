import styled from "@emotion/styled";

export const Container = styled.form`
  position: relative;
  width: 100%;
  color: ${({ theme }) => theme.color[2]};

  input,
  textarea {
    border: none;
    outline: none;
    color: ${({ theme }) => theme.color[3]};

    ::-webkit-scrollbar {
      display: none;
    }
    ::placeholder {
      color: ${({ theme }) => theme.color[2]};
    }
  }
`;

export const No = styled.div`
  margin-bottom: 20px;
  font: ${({ theme }) => theme.font["large-light"]};
  color: ${({ theme }) => theme.color[2]};
  user-select: none;
`;

export const Date = styled.div`
  font: ${({ theme }) => theme.font["small-light"]};
`;

export const Title = styled.textarea`
  width: 95%;
  font: ${({ theme }) => theme.font["xxlarge-bold"]};
  color: ${({ theme }) => theme.color[4]} !important;
  word-break: break-all;
  resize: none;

  ::placeholder {
    font: ${({ theme }) => theme.font["xxlarge-bold"]};
    color: ${({ theme }) => theme.color[3]};
  }
`;

export const DummyTitle = styled.div`
  position: absolute;
  width: 97%;
  min-height: 60px;
  font: ${({ theme }) => theme.font["xxlarge-bold"]};
  word-break: break-all;
  visibility: hidden;
`;

export const AuthPublishContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

export const Author = styled.div`
  input {
    width: 100%;
    font: ${({ theme }) => theme.font["small-light"]};
  }
`;

export const DummyAuthor = styled.div`
  min-width: 40px;
  font: ${({ theme }) => theme.font["small-light"]};
  position: fixed;
  visibility: hidden;
`;

export const Publisher = styled.div`
  input {
    width: 100%;
    font: ${({ theme }) => theme.font["small-light"]};
    color: inherit;
  }
`;

export const DummyPublisher = styled.div`
  min-width: 60px;
  max-width: 200px;
  border: 1px solid;
  font: ${({ theme }) => theme.font["small-light"]};
  position: fixed;
  visibility: hidden;
`;

export const Detail = styled.textarea`
  width: 100%;
  height: 150px;
  font: ${({ theme }) => theme.font["small-light"]};
  letter-spacing: 1px;
  flex-grow: 1;
  resize: none;
`;
