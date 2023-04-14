import styled from "@emotion/styled";

export const Container = styled.div`
  > button {
    margin-top: 5px;
  }
`;

export const Form = styled.form`
  position: relative;
  display: flex;

  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color[4]}88;
  background-color: ${({ theme }) => theme.color[1]};

  > div:first-of-type {
    position: relative;
    flex-grow: 1;
  }

  textarea,
  input {
    width: calc(100% - 4px);
    border: none;
    resize: none;
    outline: none;

    ::placeholder {
      color: ${({ theme }) => theme.color[2]};
    }
    ::-webkit-scrollbar {
      display: hidden;
    }
  }
`;

export const QuoteInput = styled.textarea`
  height: 22px;
  font: ${({ theme }) => theme.font["xsmall-bold"]};
  color: ${({ theme }) => theme.color[4]};

  ::placeholder {
    font: ${({ theme }) => theme.font["xsmall-light"]};
  }
`;

export const DummyQuoteInput = styled.div`
  position: absolute;
  width: calc(100% - 10px);
  min-height: 22px;
  font: ${({ theme }) => theme.font["xsmall-bold"]};
  visibility: hidden;
`;

export const NoteInput = styled.textarea`
  height: 20px;
  font: ${({ theme }) => theme.font["xsmall-light"]};
  word-break: break-all;
  color: ${({ theme }) => theme.color[3]};
`;

export const DummyNote = styled.div`
  position: absolute;
  min-height: 20px;
  padding-left: 2px;
  font: ${({ theme }) => theme.font["xsmall-light"]};
  visibility: hidden;
`;

export const PageInput = styled.div`
  display: flex;
  font: ${({ theme }) => theme.font["xsmall-light"]};
  color: ${({ theme }) => theme.color[3]};

  input {
    font: ${({ theme }) => theme.font["xsmall-light"]};
    color: ${({ theme }) => theme.color[3]};
    ::placeholder {
      font: ${({ theme }) => theme.font["xsmall-light"]};
      color: ${({ theme }) => theme.color[2]};
    }
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export const CancelButton = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 50%;
  flex-shrink: 0;
  transition: 0.2s ease-out all;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.color[2]}55;
  }
`;
