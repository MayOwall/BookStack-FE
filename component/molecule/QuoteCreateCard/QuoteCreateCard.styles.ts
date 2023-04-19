import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  gap: 5px;

  margin-top: 10px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.color[4]}88;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color[1]};

  > div:first-of-type {
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;

    width: 1px;
    height: fit-content;
  }

  textarea,
  input {
    border: none;
    resize: none;
    outline: none;
    padding: 0;
    word-break: break-all;

    ::placeholder {
      color: ${({ theme }) => theme.color[2]}88;
    }
    ::-webkit-scrollbar {
      display: hidden;
    }
  }
`;

export const Date = styled.div`
  font: ${({ theme }) => theme.font["xsmall-light"]};
  color: ${({ theme }) => theme.color[3]};
`;

export const QuoteInput = styled.textarea`
  height: 20px;
  font: ${({ theme }) => theme.font["xsmall-bold"]};
  color: ${({ theme }) => theme.color[4]};

  ::placeholder {
    font: ${({ theme }) => theme.font["xsmall-light"]};
  }
`;

export const DummyQuoteInput = styled.div`
  position: absolute;
  border: 1px solid;

  width: calc(100% - 3px);
  min-height: 20px;
  font: ${({ theme }) => theme.font["xsmall-bold"]};
  visibility: hidden;
`;

export const NoteInput = styled.textarea`
  height: 18px;
  font: ${({ theme }) => theme.font["xsmall-light"]};
  color: ${({ theme }) => theme.color[3]};
`;

export const DummyNote = styled.div`
  position: absolute;
  min-height: 18px;
  font: ${({ theme }) => theme.font["xsmall-light"]};
  visibility: hidden;
`;

export const PageInput = styled.div`
  display: flex;
  font: ${({ theme }) => theme.font["xsmall-light"]};
  color: ${({ theme }) => theme.color[3]};

  input {
    margin-left: 5px;
    font: ${({ theme }) => theme.font["xsmall-light"]};
    color: ${({ theme }) => theme.color[3]};

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
