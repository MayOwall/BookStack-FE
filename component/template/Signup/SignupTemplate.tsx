import Link from "next/link";
import { Input, RoundButton } from "component";
import { ISignupTemplateProps } from "type";
import * as S from "./SignupTemplate.styles";

function SignupTemplate({
  inputValues,
  onChange,
  onSubmit,
}: ISignupTemplateProps) {
  const { id, pw, pwConfirm, nickname } = inputValues;
  return (
    <S.Container>
      <S.Header>
        <h1>BOOK STACK</h1>
        <h2>Sign up</h2>
      </S.Header>
      <S.Form onSubmit={onSubmit}>
        <Input
          type="label"
          label="아이디"
          value={id.value}
          alert="아이디를 확인해 주세요"
          isAlert={id.isAlert}
          onChange={(v: string) => onChange("id", v)}
          placeholder="4글자 이상 10글자 이하"
        />
        <Input
          type="label"
          label="비밀번호"
          value={pw.value}
          alert="비밀번호는 8글자 이상 15글자 이하여야 합니다."
          isAlert={pw.isAlert}
          onChange={(v: string) => onChange("pw", v)}
          placeholder="8글자 이상 15글자 이하"
        />
        <Input
          type="label"
          label="비밀번호 확인"
          value={pwConfirm.value}
          alert="비밀번호가 같은지 확인해 주세요"
          isAlert={pwConfirm.isAlert}
          onChange={(v: string) => onChange("pwConfirm", v)}
          placeholder="위와 동일한 비밀번호를 입력해 주세요"
        />
        <Input
          type="label"
          label="닉네임"
          value={nickname.value}
          alert="닉네임을 확인해 주세요"
          isAlert={nickname.isAlert}
          onChange={(v: string) => onChange("nickname", v)}
          placeholder="2글자 이상 8글자 이하"
        />
      </S.Form>
      <S.Buttons>
        <RoundButton
          type="line"
          onClick={onSubmit}
          height="45px"
          fontSize="14px"
        >
          회원가입
        </RoundButton>
        <small>
          이미 회원이신가요?
          <Link href="./signin">
            <span>로그인</span>
          </Link>
        </small>
      </S.Buttons>
    </S.Container>
  );
}

export default SignupTemplate;
