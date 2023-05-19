"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button2 } from "component";
import * as S from "./HomeTemplate.styles";

function HomeTemplate() {
  const router = useRouter();
  return (
    <S.Container>
      <S.Upper>
        <S.Header>
          <S.Title>BOOKSTACK</S.Title>
          <Link href="/login">
            <S.LoginBtn>LOGIN</S.LoginBtn>
          </Link>
        </S.Header>
      </S.Upper>
      <S.Bottom>
        <S.Comment>
          책을 읽고,
          <br />
          <strong>기록</strong>을 쌓아보세요
        </S.Comment>
        <Button2
          width="fill"
          buttonType="fill"
          onClick={() => {
            router.push("/signup");
          }}
        >
          지금 시작하기
        </Button2>
      </S.Bottom>
    </S.Container>
  );
}

export default HomeTemplate;
