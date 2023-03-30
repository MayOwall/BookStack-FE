import { useRouter } from "next/navigation";
import { RoundButton } from "component";
import * as S from "./HomeTemplate.styles";
import StackIcon from "public/StackIcon.svg";

function HomeTemplate() {
  const router = useRouter();
  const arr: number[] = [100, 84, 70, 55, 40, 30, 20, 10];
  return (
    <S.Container>
      <S.TitleStack>
        {arr.map((v, idx) => (
          <div key={idx} style={{ opacity: `${v}%` }}>
            BOOK STACK
          </div>
        ))}
      </S.TitleStack>
      <span>독서 기록을 쌓아보세요</span>
      <S.ButtonContainer>
        <RoundButton type="fill" onClick={() => router.push("/login")}>
          Login
        </RoundButton>
        <RoundButton type="line" onClick={() => router.push("/signup")}>
          Sign up
        </RoundButton>
      </S.ButtonContainer>
      <StackIcon fill="#FF8298" stroke="#FF8298" />
    </S.Container>
  );
}

export default HomeTemplate;
