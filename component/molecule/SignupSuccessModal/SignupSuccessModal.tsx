import { useRouter } from "next/navigation";
import { Button } from "component";
import * as S from "./SignupSuccessModal.styles";

function SignupSuccessModal() {
  const router = useRouter();
  return (
    <S.Container>
      <h1>
        새로운 STACKER는 <br />
        📚 언제든 환영이야 ✨
      </h1>
      <small>함께 새로운 책을 쌓으러 가 볼까요?</small>
      <Button
        buttonType="largeFill"
        onClick={() => {
          router.push("/login");
        }}
        width="250px"
      >
        로그인 하러 가기
      </Button>
    </S.Container>
  );
}

export default SignupSuccessModal;
