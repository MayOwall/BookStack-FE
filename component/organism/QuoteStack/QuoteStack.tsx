"use client";
import { useState } from "react";
import { Button, QuoteCard, QuoteCreateCard } from "component";
import { dateFormatter } from "hooks";
import { IQuoteStackProps } from "type";
import * as S from "./QuoteStack.styles";

function QuoteStack({ quoteData, handleQuoteData }: IQuoteStackProps) {
  const [isCreatingNew, setIsCreatingNew] = useState(false);

  // Quote 생성 , 생성 취소 핸들러
  const handleQuoteCreate = () => {
    setIsCreatingNew((v) => !v);
  };

  // Quote 생성 핸들러
  const handleQuotePush = (newQuoteData: {
    page: number;
    quote: string;
    note: string;
  }) => {
    const nextData = {
      date: dateFormatter(new Date()),
      newQuoteData,
    };
    console.log(nextData);
    handleQuoteCreate();
  };

  // Quote 삭제 핸들러
  const handleQuoteEdit = (_id: string) => {};

  return (
    <S.Container>
      <S.Title>Quote Stack</S.Title>
      <S.StackContainer>
        {quoteData.map(({ date, quoteList }, i) => (
          <S.QuoteContainer key={`QuoteContainer${i}`}>
            <S.StackDate>{date}</S.StackDate>
            {quoteList.map(({ _id, page, quote, note }, i) => (
              <QuoteCard
                key={`QuoteCard${i}`}
                _id={_id}
                quote={quote}
                page={page}
                note={note}
                handleQuoteEdit={handleQuoteEdit}
              />
            ))}
          </S.QuoteContainer>
        ))}
        {isCreatingNew && (
          <QuoteCreateCard
            handlePush={handleQuotePush}
            handleCancel={handleQuoteCreate}
          />
        )}
        {!isCreatingNew && (
          <Button
            buttonType="smallFill"
            width="100%"
            onClick={handleQuoteCreate}
          >
            + Push new Quote
          </Button>
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
