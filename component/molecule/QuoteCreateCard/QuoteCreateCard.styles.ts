import styled from "@emotion/styled";

export const Form = styled.form`
  position: relative;
  width: 100%;
  height: fit-content;
  padding: 15px;
  padding-right: 45px;
  border-radius: 10px;
  border: 1px solid;
  background-color: ${({ theme }) => theme.color.white};

  input,
  textarea {
    border: none;
    width: calc(100% - 30px);
    outline: none;
    resize: none;
    word-break: break-all;

    ::placeholder {
      opacity: 50%;
    }
  }

  label {
    display: block;
    margin-top: 2px;
    font: ${({ theme }) => theme.font["small-light"]};
    color: ${({ theme }) => theme.color.lightgray};
  }
`;

export const QuoteInput = styled.textarea`
  font: ${({ theme }) => theme.font["small-bold"]};
  font-size: 14px;
  font-weight: 600;

  ::-webkit-scrollbar {
    display: hidden;
  }
`;

export const DummyQuoteInput = styled.div`
  position: absolute;
  width: calc(100% - 95px);
  min-height: 22px;
  font: ${({ theme }) => theme.font["small-bold"]};
  font-size: 14px;
  font-weight: 600;
  z-index: 10;
  word-break: break-all;
  visibility: hidden;
`;

export const PageInput = styled.input`
  margin-top: 2px;
  font: ${({ theme }) => theme.font["small-light"]};
  color: ${({ theme }) => theme.color.lightgray};

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const PushButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  border: none;
  border-radius: 30px;
  padding: 1px 15px 3px 15px;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  font: ${({ theme }) => theme.font["x-small-light"]};
  cursor: pointer;
  transition: 0.2s ease-out all;

  :hover {
    opacity: 80%;
  }
  :active {
    opacity: 80%;
  }
`;

export const CancelButton = styled.div`
  position: absolute;
  top: 15px;
  right: 10px;
  padding: 1px;
  cursor: pointer;
  border-radius: 50%;
  transition: 0.2s ease-out all;

  :hover {
    background-color: ${({ theme }) => theme.color.lightgray}55;
  }
`;
