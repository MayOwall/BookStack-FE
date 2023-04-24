import styled from "@emotion/styled";

export const Container = styled.form`
  position: relative;
  width: 100%;
  height: fit-content;
  color: ${({ theme }) => theme.color[2]};

  input,
  textarea {
    border: none;
    outline: none;
    word-break: break-all;
    resize: none;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  input {
    font: ${({ theme }) => theme.font["small-light"]};
    color: ${({ theme }) => theme.color[3]};

    ::placeholder {
      color: ${({ theme }) => theme.color[2]}88;
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
  color: ${({ theme }) => theme.color[4]};
  margin-bottom: 20px;

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

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  > div:first-of-type {
    width: calc(100% - 120px);
  }
`;
export const Author = styled.input`
  width: 100%;
  margin-bottom: 5px;
`;

export const Publisher = styled.input`
  width: 100%;
  margin-bottom: 20px;
`;

export const Detail = styled.textarea`
  width: 100%;
  height: 150px;
  letter-spacing: 1px;
  flex-grow: 1;
  resize: none;
  font: ${({ theme }) => theme.font["small-light"]};
  color: ${({ theme }) => theme.color[3]};

  ::placeholder {
    color: ${({ theme }) => theme.color[2]};
  }
`;

export const BookImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100%;
  aspect-ratio: 1 / 1.4;
  border: 1px solid ${({ theme }) => theme.color[2]}44;
  border-radius: 5px;
  cursor: pointer;

  :hover > div {
    color: ${({ theme }) => theme.color[3]};
  }

  div {
    font: ${({ theme }) => theme.font["small-light"]};
    text-align: center;
    transition: 0.2s ease-out all;
  }

  > input {
    display: none;
  }
`;

export const TempBookImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    object-fit: cover;
    border-radius: 5px;
  }
`;
