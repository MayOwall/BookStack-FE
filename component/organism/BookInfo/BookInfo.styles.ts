import styled from "@emotion/styled";

export const Container = styled.form`
  width: 100%;
  color: ${({ theme }) => theme.color.darkgray};

  > div:nth-of-type(2) {
    display: flex;
    gap: 10px;
  }

  > div:last-of-type {
    display: flex;
    gap: 30px;
    margin-top: 20px;
  }

  input,
  textarea {
    border: none;
    outline: none;

    ::placeholder {
      color: ${({ theme }) => theme.color.lightgray}77;
    }

    :disabled {
      background: none;
      color: inherit;
    }
  }
`;

export const No = styled.div`
  font: ${({ theme }) => theme.font["medium-light"]};
  color: ${({ theme }) => theme.color.lightgray};
  user-select: none;
`;

export const Title = styled.input`
  width: 90%;
  font: ${({ theme }) => theme.font["large-bold"]};
  font-size: 35px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.black};
`;

export const Author = styled.div`
  input {
    width: 100%;
    font: ${({ theme }) => theme.font["small-light"]};
    color: inherit;
  }
`;

export const DummyAuthor = styled.div`
  min-width: 40px;
  max-width: 200px;
  font: ${({ theme }) => theme.font["small-light"]};
  position: fixed;
  bottom: 0;
  left: 0;
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
  min-width: 50px;
  max-width: 200px;
  font: ${({ theme }) => theme.font["small-light"]};
  position: fixed;
  bottom: 0;
  left: 0;
  visibility: hidden;
`;

export const Date = styled.div`
  margin-top: 30px;
  color: inherit;
  user-select: none;

  div {
    font: ${({ theme }) => theme.font["small-bold"]};
    font-size: 16px;
    font-weight: 500;
  }
  div:last-of-type {
    font: ${({ theme }) => theme.font["small-light"]};
    font-size: 16px;
  }
`;

export const Detail = styled.textarea`
  font: ${({ theme }) => theme.font["small-light"]};
  letter-spacing: 1px;
  flex-grow: 1;
  resize: none;
  color: ${({ theme }) => theme.color.darkgray};
`;

export const Img = styled.div`
  flex-shrink: 0;
  height: 130px;
  aspect-ratio: 1 / 1.4;
  border: 1px dashed ${({ theme }) => theme.color.lightgray};
  border-radius: 10px;
  visibility: hidden;
`;
