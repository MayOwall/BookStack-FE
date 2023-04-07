"use client";
import { useState, useRef } from "react";
import { RoundButton } from "component";
import { dateFormatter } from "hooks";
import { DeleteIcon } from "public";
import { IQuoteStackProps } from "@/type";
import * as S from "./QuoteStack.styles";
import { theme } from "style";

function QuoteStack({ data, handleData }: IQuoteStackProps) {
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [newQuoteData, setNewQuoteData] = useState({ quote: "", page: "" });
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const textareaDummyRef = useRef<HTMLDivElement | null>(null);
  const [textareaStyle, setTextareaStyle] = useState<any>({});

  const onNumberInput = (e: React.FormEvent) => {
    const { data } = e.nativeEvent as any;
    if (/[^0-9]/.test(data)) {
      e.preventDefault();
      return;
    }
    const target = e.target as HTMLInputElement;
    if (target.maxLength && target.value.length > target.maxLength) {
      target.value = target.value
        .replace(/[^0-9]g/, "")
        .slice(0, target.maxLength);
    }
  };

  const handleQuoteData = (type: "quote" | "page", data: string) => {
    if (type === "quote") handleTextAreaHeight();

    const nextData = {
      ...newQuoteData,
      [type]: data,
    };
    setNewQuoteData(() => nextData);
  };

  const handleTextAreaHeight = () => {
    const { offsetHeight } = textareaDummyRef.current as HTMLDivElement;
    const nextData = {
      ...textareaStyle,
      height: offsetHeight,
    };
    if (textareaRef.current) {
      setTextareaStyle(() => nextData);
    }
  };

  const clearNewQuoteData = () => {
    const nextData = {
      quote: "",
      page: "",
    };
    setNewQuoteData(() => nextData);
  };

  const handleDeleteButton = () => {
    setIsCreatingNew((v) => !v);
    clearNewQuoteData();
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextData = [...data];
    const nextQuote = {
      ...newQuoteData,
      page: parseInt(newQuoteData.page),
    };
    const lastData = nextData[nextData.length - 1];
    const today = new Date();

    if (lastData.date === dateFormatter(today)) {
      // 마지막 날짜와 오늘 날짜가 같으면 마지막 stack에 push
      lastData.quoteList.push(nextQuote);
    } else {
      // 마지막 날짜와 오늘 날짜가 다르면 새로운 stack을 만들어 push
      const nextStack = {
        date: dateFormatter(today),
        quoteList: [nextQuote],
      };
      nextData.push(nextStack);
    }

    handleData(nextData);

    setIsCreatingNew((v) => !v);
    clearNewQuoteData();
  };

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

  return (
    <S.Container>
      <S.StackContainer>
        {data.map(({ date, quoteList }, i) => (
          <S.QuoteContainer key={`QuoteContainer${i}`}>
            <S.StackDate>{date}</S.StackDate>
            {quoteList.map(({ page, quote }, i) => (
              <S.StackQuote className="quote" key={`StackQuote${i}`}>
                <p>{quote}</p>
                <small>p. {page}</small>
                <S.DeleteButton onClick={handleQuoteDelete}>
                  <DeleteIcon
                    width="15px"
                    height="15px"
                    stroke={theme.color.lightgray}
                  />
                </S.DeleteButton>
              </S.StackQuote>
            ))}
          </S.QuoteContainer>
        ))}
        {isCreatingNew && (
          <S.QuoteCreateBox onSubmit={handleQuoteSubmit}>
            <textarea
              ref={textareaRef}
              name="quote"
              placeholder="새로운 구문을 입력해 주세요"
              maxLength={150}
              value={newQuoteData.quote}
              onChange={(e) => handleQuoteData("quote", e.target.value)}
              style={textareaStyle}
            />

            <div>
              {"p. "}
              <input
                onInput={onNumberInput}
                name="page"
                value={newQuoteData.page}
                onChange={(e) => handleQuoteData("page", e.target.value)}
                placeholder="페이지를 입력해주세요"
                type="number"
                maxLength={5}
              />
            </div>
            <S.DummyTextarea ref={textareaDummyRef}>
              {newQuoteData.quote}
            </S.DummyTextarea>
            <S.DeleteButton onClick={handleDeleteButton}>
              <DeleteIcon
                width="15px"
                height="15px"
                stroke={theme.color.lightgray}
              />
            </S.DeleteButton>
            <button type="submit">PUSH</button>
          </S.QuoteCreateBox>
        )}
        {!isCreatingNew && (
          <RoundButton
            type="dash"
            onClick={() => {
              setIsCreatingNew((v) => !v);
            }}
            height="24px"
          >
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
