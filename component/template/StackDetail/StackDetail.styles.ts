import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding-top: 220px;
`;

export const CoverContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 250px;
  background: lightgray;

  img {
    object-fit: cover;
  }
`;

export const CoverButton = styled.button`
  position: absolute;
  bottom: 40px;
  right: 30px;
  padding: 3px 10px;
  border: 1px solid white;
  color: white;
  background: none;
  border-radius: 30px;
  opacity: 80%;
  transition: 0.2s ease-out all;
  cursor: pointer;

  :hover {
    opacity: 100%;
    background-color: #ffffff33;
  }

  input {
    display: none;
  }
`;

export const DetailContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: fit-content;
  padding: 60px 30px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  gap: 80px;
  z-index: 1;
`;
