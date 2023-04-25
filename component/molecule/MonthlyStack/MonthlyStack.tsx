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
            <S.Stack key={v._id} onClick={() => onStackClick(v._id)}>
              <div>
                <h4>{v.title}</h4>
                <small>
                  <span>{v.author}</span>
                  <span>{v.date}</span>
                </small>
                <div># {v.no.toString().padStart(3, "0")}</div>
              </div>
              {!!v.bookImage && (
                <div>
                  <Image src={v.bookImage} fill alt="bookimg" />
                </div>
              )}
            </S.Stack>
          ))}
        <S.Shelf>
          {stackType === "shelf" &&
            stackList.map((v) => (
              <div key={v._id} onClick={() => onStackClick(v._id)}>
                {!!v.bookImage && (
                  <Image src={v.bookImage} fill alt="bookimg" />
                )}
                {!v.bookImage && <h4>{v.title}</h4>}
              </div>
            ))}
        </S.Shelf>
      </S.Inner>
    </S.Container>
  );
}

export default MonthlyStack;
