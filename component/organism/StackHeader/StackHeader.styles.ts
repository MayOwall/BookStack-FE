import styled from "@emotion/styled";

export const Container = styled.header`
  width: 100%;
`;

export const Upper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;

export const Title = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    font: ${({ theme }) => theme.font["medium-bold"]};
  }
`;

export const IconContainer = styled.div`
  position: relative;
  top: 2px;
  width: 20px;
  height: 20px;
  opacity: 50%;
  cursor: pointer;
  transition: 0.2s ease-out all;

  :hover {
    opacity: 100%;
  }
`;

export const Profile = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.color.lightgray}88;
  border-radius: 50%;

  img {
    border-radius: 50%;
    object-fit: contain;
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  > div {
    display: flex;

    span {
      position: relative;
      right: 3px;
      bottom: 8px;
      width: 30px;
      height: 30px;
      cursor: pointer;
    }

    span:nth-child(even) {
      margin-left: 15px;
    }
  }

  > div:first-of-type {
    display: flex;
    gap: 20px;
  }
`;
