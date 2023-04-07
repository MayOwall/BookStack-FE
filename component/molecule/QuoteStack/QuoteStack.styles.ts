import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const LineContainer = styled.div`
  position: absolute;
  top: 0;
  left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;

  width: 10px;
  height: calc(100% + 30px);
`;

export const Line = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.color.black};
`;

export const Dot = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.color.black};
  border-radius: 50%;
`;

export const StackContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
  position: relative;
  width: 100%;
  z-index: 2;
`;

export const QuoteContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  gap: 16px;
`;

export const StackDate = styled.div`
  position: relative;
  width: 90px;
  height: 24px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};
  border-radius: 30px;
  font: ${({ theme }) => theme.font["small-light"]};
  line-height: 23px;
  text-align: center;
`;

export const StackPage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 180px;
  height: 24px;
  padding-right: 18px;
  color: ${({ theme }) => theme.color.black};
  border: 1px solid;
  border-radius: 12px;
  line-height: 21px;
  text-align: right;
`;

export const StackQuote = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  padding: 15px;
  padding-right: 45px;
  border-radius: 10px;
  border: 1px solid;
  background-color: ${({ theme }) => theme.color.white};

  p {
    font: ${({ theme }) => theme.font["small-bold"]};
    font-size: 14px;
    font-weight: 600;
  }
  small {
    margin-top: 2px;
    display: block;
    font: ${({ theme }) => theme.font["small-light"]};
    color: ${({ theme }) => theme.color.lightgray};
  }
`;

export const QuoteCreateBox = styled.form`
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

  textarea[name="quote"] {
    font: ${({ theme }) => theme.font["small-bold"]};
    font-size: 14px;
    font-weight: 600;

    ::-webkit-scrollbar {
      display: hidden;
    }
  }

  input[name="page"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[name="page"],
  div:first-of-type {
    margin-top: 2px;
    font: ${({ theme }) => theme.font["small-light"]};
    color: ${({ theme }) => theme.color.lightgray};
  }

  > button {
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
  }
`;

export const DummyTextarea = styled.div`
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

export const DeleteButton = styled.div`
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
