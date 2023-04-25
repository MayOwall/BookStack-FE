"use client";
import Link from "next/link";
import { Input, Button } from "component";
import { ISignupTemplateProps } from "type";
import * as S from "./SignupTemplate.styles";

function SignupTemplate({
  inputValues,
  onChange,
  handleSubmit,
}: ISignupTemplateProps) {
  const { id, pw, pwConfirm, nickname } = inputValues;
  return (
    <S.Container>
      <S.Header>
        <h1>BOOK STACK</h1>
        <h2>Sign up</h2>
      </S.Header>
      <S.Form onSubmit={handleSubmit}>
        <Input
          type="default"
          label="아이디"
          value={id.value}
          alertLabel="아이디를 확인해 주세요"
          isAlert={id.isAlert}
          onChange={(v: string) => onChange("id", v)}
          placeholder="4글자 이상 10글자 이하"
        />
        <Input
          type="password"
          label="비밀번호"
          value={pw.value}
          alertLabel="비밀번호는 8글자 이상 15글자 이하여야 합니다."
          isAlert={pw.isAlert}
          onChange={(v: string) => onChange("pw", v)}
          placeholder="8글자 이상 15글자 이하"
        />
        <Input
          type="password"
          label="비밀번호 확인"
          value={pwConfirm.value}
          alertLabel="비밀번호가 같은지 확인해 주세요"
          isAlert={pwConfirm.isAlert}
          onChange={(v: string) => onChange("pwConfirm", v)}
          placeholder="위와 동일한 비밀번호를 입력해 주세요"
        />
        <Input
          type="default"
          label="닉네임"
          value={nickname.value}
          alertLabel="닉네임을 확인해 주세요"
          isAlert={nickname.isAlert}
          onChange={(v: string) => onChange("nickname", v)}
          placeholder="2글자 이상 8글자 이하"
        />
      </S.Form>
      <S.Buttons>
        <Button buttonType="largeFill" onClick={handleSubmit} width="100%">
          SIGN UP
        </Button>
        <div>
          이미 회원이신가요?
          <Link href="./signin">
            <span>로그인</span>
          </Link>
        </div>
      </S.Buttons>
    </S.Container>
  );
}

export default SignupTemplate;
