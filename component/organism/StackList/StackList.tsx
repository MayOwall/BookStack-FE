import { MonthlyStack } from "component";
import { IStackListProps } from "type";

import * as S from "./StackList.styles";

function StackList({ stackType, stackData, onStackClick }: IStackListProps) {
  return (
    <S.Container>
      <S.Year>2023</S.Year>
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
