"use client";
import { useState } from "react";
import { Button, QuoteCard, QuoteCreateCard } from "component";
import { IQuoteStackProps, QuoteCardData } from "type";
import * as S from "./QuoteStack.styles";

function QuoteStack({ quoteList, handleQuoteData }: IQuoteStackProps) {
  const [isCreatingNew, setIsCreatingNew] = useState(false);

  // Quote 생성 핸들러
  const handleQuotePush = (newQuoteData: QuoteCardData) => {
    setIsCreatingNew((v) => !v);
    // 현재 quoteList에 새 quoteList 추가
    handleQuoteData("push", newQuoteData);
  };

  // Quote 삭제 핸들러
  const handleQuoteEdit = (_id: string) => {};

  return (
    <S.Container>
      <S.Title>Quote Stack</S.Title>
      <S.StackContainer>
        <small>{quoteList.length ? "BOTTOM" : "NO QUOTE"}</small>

        {quoteList.map((data, i) => (
          <QuoteCard
            key={`QuoteCard${i}`}
            data={data}
            handleQuoteEdit={handleQuoteEdit}
          />
        ))}

        {isCreatingNew && (
          <QuoteCreateCard
            handlePush={handleQuotePush}
            handleCancel={() => setIsCreatingNew((v) => !v)}
          />
        )}

        {!isCreatingNew && (
          <Button
            buttonType="smallFill"
            width="100%"
            onClick={() => setIsCreatingNew((v) => !v)}
          >
            Create new Quote
          </Button>
        )}
      </S.StackContainer>
    </S.Container>
  );
}

export default QuoteStack;
