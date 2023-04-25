import styled from "@emotion/styled";

export const Container = styled.header`
  width: 100%;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Title = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    font: ${({ theme }) => theme.font["large-bold"]};
  }
`;

export const IconContainer = styled.div`
  position: relative;
  top: 2px;
  width: 20px;
  height: 20px;
  opacity: 50%;
`;

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

  img {
    border-radius: 50%;
    cursor: pointer;
  }
`;
