"use client";
import Link from "next/link";
import { Input, Button } from "component";
import { ISigninTemplateProps } from "type";
import * as S from "./SigninTemplate.styles";

function SigninTemplate({
  inputValues,
  onChange,
  handleSubmit,
}: ISigninTemplateProps) {
  const { id, pw } = inputValues;

  // id value 핸들러
  const handleIdValue = (v: string) => {
    onChange("id", v);
  };

  // pw value 핸들러
  const handlePwValue = (v: string) => {
    onChange("pw", v);
  };

  return (
    <S.Container>
      <S.Header>
        <h1>BOOK STACK</h1>
        <h2>LOGIN</h2>
      </S.Header>
      <S.Inputs>
        <Input
          type="default"
          label="아이디"
          value={id.value}
          alertLabel="아이디를 확인해 주세요"
          isAlert={id.isAlert}
          onChange={handleIdValue}
          placeholder="아이디를 입력해 주세요"
          maxLength={20}
        />
        <Input
          type="password"
          label="비밀번호"
          value={pw.value}
          alertLabel="비밀번호를 확인해 주세요"
          isAlert={pw.isAlert}
          onChange={handlePwValue}
          placeholder="비밀번호를 입력해 주세요"
          maxLength={20}
        />
      </S.Inputs>
      <S.Buttons>
        <Button buttonType="largeFill" width="100%" onClick={handleSubmit}>
          LOGIN
        </Button>
        <div>
          아직 회원이 아니신가요?
          <Link href="/signup">
            <span>회원가입</span>
          </Link>
        </div>
      </S.Buttons>
    </S.Container>
  );
}

export default SigninTemplate;
