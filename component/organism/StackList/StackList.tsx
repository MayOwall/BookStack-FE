import { useRouter } from "next/navigation";
import { RoundButton, MonthlyStack } from "component";
import { IStackListProps } from "type";
import * as S from "./StackList.styles";

function StackList({ stackType, stackData, onStackClick }: IStackListProps) {
  const router = useRouter();
  return (
    <S.Container>
      <S.Year>2023</S.Year>
      <S.ButtonContainer stackType={stackType}>
        <RoundButton
          type="fill"
          onClick={() => {
            router.push("/stack/create");
          }}
          width="100%"
          height="52px"
          fontSize="21px"
        >
          + Add Book Stack
        </RoundButton>
      </S.ButtonContainer>
      <S.Inner>
        {stackData.map((stack, i) => (
          <div key={i}>
            <MonthlyStack
              month={stack.month}
              stackType={stackType}
              stackList={stack.data}
              onStackClick={onStackClick}
            />
          </div>
        ))}
      </S.Inner>
    </S.Container>
  );
}

export default StackList;
