"use client";
import { useState } from "react";
import { RoundButton, QuoteCard, QuoteCreateCard } from "component";
import { dateFormatter } from "hooks";
import { IQuoteStackProps } from "type";
import * as S from "./QuoteStack.styles";

function QuoteStack({ quoteData, handleQuoteData }: IQuoteStackProps) {
  const [isCreatingNew, setIsCreatingNew] = useState(false);

  // Quote 생성 버튼 클릭 핸들러
  const handleRoundButton = () => {
    setIsCreatingNew((v) => !v);
  };

  // Quote 생성 취소 핸들러
  const handleQuoteCancel = () => {
    setIsCreatingNew((v) => !v);
  };

  // Quote 생성 핸들러
  const handleQuotePush = (newQuoteData: { page: number; quote: string }) => {
    const { quote, page } = newQuoteData;
    const nextData = {
      quote,
      page,
    };
    handleQuoteData("push", nextData);
  };

  // Quote 삭제 핸들러
  const handleQuoteDelete = (_id: string) => {
    const nextData = {
      _id,
    };
    handleQuoteData("delete", nextData);
  };

  return (
    <S.Container>
      <S.StackContainer>
        {quoteData.map(({ date, quoteList }, i) => (
          <S.QuoteContainer key={`QuoteContainer${i}`}>
            <S.StackDate>{date}</S.StackDate>
            {quoteList.map(({ _id, page, quote }, i) => (
              <QuoteCard
                key={`QuoteCard${i}`}
                _id={_id}
                quote={quote}
                page={page}
                handleQuoteDelete={handleQuoteDelete}
              />
            ))}
          </S.QuoteContainer>
        ))}
        {isCreatingNew && (
          <QuoteCreateCard
            handlePush={handleQuotePush}
            handleCancel={handleQuoteCancel}
          />
        )}
        {!isCreatingNew && (
          <RoundButton type="dash" onClick={handleRoundButton} height="24px">
            Push New Stack
          </RoundButton>
        )}
      </S.StackContainer>
      <S.LineContainer>
        <S.Line />
        <S.Dot />
      </S.LineContainer>
    </S.Container>
  );
}

export default QuoteStack;
