import Link from "next/link";
import { Input, RoundButton } from "component";
import { ISigninTemplateProps } from "type";
import * as S from "./SigninTemplate.styles";

function SigninTemplate({
  inputValues,
  onChange,
  onSubmit,
}: ISigninTemplateProps) {
  const { id, pw } = inputValues;

  return (
    <S.Container>
      <S.Header>
        <h1>BOOK STACK</h1>
        <h2>Sign in</h2>
      </S.Header>
      <S.Inputs>
        <Input
          type="label"
          label="아이디"
          value={id}
          alert="아이디를 확인해 주세요"
          isAlert={false}
          onChange={(v: string) => onChange("id", v)}
          placeholder="아이디를 입력해 주세요"
        />
        <Input
          type="label"
          label="비밀번호"
          value={pw}
          alert="비밀번호를 확인해 주세요"
          isAlert={false}
          onChange={(v: string) => onChange("pw", v)}
          placeholder="비밀번호를 입력해 주세요"
        />
      </S.Inputs>
      <S.Buttons>
        <RoundButton
          type="line"
          onClick={onSubmit}
          height="45px"
          fontSize="14px"
        >
          로그인
        </RoundButton>
        <small>
          신규 사용자이신가요?
          <Link href="./signup">
            <span>회원가입</span>
          </Link>
        </small>
      </S.Buttons>
    </S.Container>
  );
}

export default SigninTemplate;
