import { RoundButton } from "component";
import * as S from "./HomeTemplate.styles";

function HomeTemplate() {
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
        <RoundButton type="fill" onClick={() => {}}>
          Login
        </RoundButton>
        <RoundButton type="line" onClick={() => {}}>
          Sign up
        </RoundButton>
      </S.ButtonContainer>
    </S.Container>
  );
}

export default HomeTemplate;
