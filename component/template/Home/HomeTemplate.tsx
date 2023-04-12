"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { Button } from "component";
import * as S from "./HomeTemplate.styles";

function HomeTemplate() {
  const router = useRouter();
  const ref = useRef<HTMLDivElement | null>(null);
  const arr = Array.from({ length: 7 }, () => "BOOK STACK");

  const handleLoginButton = () => {
    router.push("/login");
  };

  const handleSignupButton = () => {
    router.push("/signup");
  };

  return (
    <S.Container>
      <S.LogoContainer ref={ref}>
        <S.FillLogo idx={1}>BOOK STACK</S.FillLogo>
        {arr.map((v, i) => (
          <S.LineLogo idx={i + 1} key={i}>
            {v}
          </S.LineLogo>
        ))}
        <S.Push>
          <p>PUSH</p>
          <p>YOUR</p>
        </S.Push>
        <S.Own>
          <p>OWN</p>
          <p>BOOK</p>
        </S.Own>
      </S.LogoContainer>
      <S.ButtonContainer>
        <Button buttonType="largeLine" width="100%" onClick={handleLoginButton}>
          LOGIN
        </Button>
        <Button
          buttonType="largeFill"
          width="100%"
          onClick={handleSignupButton}
        >
          SIGN UP
        </Button>
      </S.ButtonContainer>
    </S.Container>
  );
}

export default HomeTemplate;
