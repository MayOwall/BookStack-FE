"use client";
import { useState } from "react";
import { RoundButton, QuoteCard, QuoteCreateCard } from "component";
import { dateFormatter } from "hooks";
import { IQuoteStackProps } from "type";
import * as S from "./QuoteStack.styles";

function QuoteStack({ data, handleData }: IQuoteStackProps) {
  const [isCreatingNew, setIsCreatingNew] = useState(false);

  // Quote 삭제 핸들러
  const handleQuoteDelete = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    const { innerText } = target.closest(".quote")
      ?.children[0] as HTMLDivElement;
    const nextData = [...data];
    const filtered = nextData
      .map((stack) => {
        const nextQuoteList = stack.quoteList.filter(
          (quote) => quote.quote !== innerText
        );
        return {
          ...stack,
          quoteList: nextQuoteList,
        };
      })
      .filter((stack) => !!stack.quoteList.length);
    handleData(filtered);
  };

  // Quote 생성 핸들러
  const handleQuotePush = (newQuoteData: { page: number; quote: string }) => {
    const nextData = [...data];

    const today = dateFormatter(new Date());
    const lastData = nextData[nextData.length - 1];
    // 데이터의 마지막 날이 오늘과 동일하면, 데이터 마지막날에 push
    if (lastData.date === today) {
      lastData.quoteList.push(newQuoteData);
    }
    // 데이터 마지막 날이 오늘이 아니라면, 새로운 stack을 만들어 push
    if (lastData.date !== today) {
      const todayStack = {
        date: today,
        quoteList: [newQuoteData],
      };
      nextData.push(todayStack);
    }

    handleData(nextData);
    setIsCreatingNew((v) => !v);
  };

  // Quote 생성 취소 핸들러
  const handleQuoteCancel = () => {
    setIsCreatingNew((v) => !v);
  };

  // Quote 생성 클릭 핸들러
  const handleRoundButton = () => {
    setIsCreatingNew((v) => !v);
  };

  return (
    <S.Container>
      <S.StackContainer>
        {data.map(({ date, quoteList }, i) => (
          <S.QuoteContainer key={`QuoteContainer${i}`}>
            <S.StackDate>{date}</S.StackDate>
            {quoteList.map(({ page, quote }, i) => (
              <QuoteCard
                key={`QuoteCard${i}`}
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
