import Image from "next/image";
import { IMonthlyStackProps } from "type";
import * as S from "./MonthlyStack.styles";

function MonthlyStack({
  month,
  stackType,
  stackList,
  onStackClick,
}: IMonthlyStackProps) {
  return (
    <S.Container>
      <S.Month>{month}</S.Month>
      <S.Inner>
        {stackType === "stack" &&
          stackList.map((v) => (
            <S.Stack key={v.id} onClick={() => onStackClick(v.id)}>
              <div>
                <h4>{v.title}</h4>
                <small>
                  <span>{v.author}</span>
                  <span>{v.date}</span>
                </small>
                <div># {v.no.toString().padStart(3, "0")}</div>
              </div>
              {!!v.img && (
                <div>
                  <Image src={v.img} fill alt="bookimg" />
                </div>
              )}
            </S.Stack>
          ))}
        <S.Shelf>
          {stackType === "shelf" &&
            stackList.map((v) => (
              <div key={v.id} onClick={() => onStackClick(v.id)}>
                {!!v.img && <Image src={v.img} fill alt="bookimg" />}
                {!v.img && <h4>{v.title}</h4>}
              </div>
            ))}
        </S.Shelf>
      </S.Inner>
    </S.Container>
  );
}

export default MonthlyStack;
