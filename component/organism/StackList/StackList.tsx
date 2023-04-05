import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { RoundButton, MonthlyStack } from "component";
import { IStackListProps } from "type";
import * as S from "./StackList.styles";

function StackList({ stackType, stackData, onStackClick }: IStackListProps) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement | null>(null);

  const animation = [{ opacity: 0 }, { opacity: 1 }];

  const options = {
    duration: 1000,
    fillMode: "forwards",
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.animate(animation, options);
    }
  }, [stackType]);

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
      <S.Inner ref={ref}>
        {stackData.map((stack, i, arr) => (
          <S.StackContainer key={i} index={arr.length - i - 1}>
            <MonthlyStack
              month={stack.month}
              stackType={stackType}
              stackList={stack.stackList}
              onStackClick={onStackClick}
            />
          </S.StackContainer>
        ))}
      </S.Inner>
    </S.Container>
  );
}

export default StackList;
