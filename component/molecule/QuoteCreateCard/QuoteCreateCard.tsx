import { useState, useRef } from "react";
import { DeleteIcon } from "public";
import { IQuoteCreateCardProps } from "@/type";
import { theme } from "style";
import * as S from "./QuoteCreateCard.styles";

function QuoteCreateCard({ handlePush, handleCancel }: IQuoteCreateCardProps) {
  const [newQuoteData, setNewQuoteData] = useState({
    quote: "",
    page: "",
  });
  const [quoteInputStyle, setQuoteInputStyle] = useState<any>({});
  const quoteRef = useRef<HTMLTextAreaElement | null>(null);
  const dummyRef = useRef<HTMLDivElement | null>(null);

  // quote input style 핸들러 (높이 조절용)
  const handleQuoteInputStyle = () => {
    const { offsetHeight } = dummyRef.current as HTMLDivElement;
    const nextData = {
      ...quoteInputStyle,
      height: offsetHeight,
    };
    if (quoteRef.current) {
      setQuoteInputStyle(() => nextData);
    }
  };

  // quote값 핸들러
  const handleQuoteInput = (e: React.FormEvent) => {
    const { value } = e.target as HTMLTextAreaElement;
    const nextData = {
      ...newQuoteData,
      quote: value,
    };
    setNewQuoteData(() => nextData);
    handleQuoteInputStyle();
  };

  // page값 핸들러
  const handlePageInput = (e: React.FormEvent) => {
    const { value } = e.target as HTMLInputElement;
    const nextData = {
      ...newQuoteData,
      page: value,
    };
    setNewQuoteData(() => nextData);
  };

  // submit 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextData = {
      quote: newQuoteData.quote,
      page: parseInt(newQuoteData.page),
    };
    handlePush(nextData);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.QuoteInput
        placeholder="새로 기록하고 싶은 글을 입력해 주세요 (최대 150글자)"
        maxLength={150}
        style={quoteInputStyle}
        ref={quoteRef}
        value={newQuoteData.quote}
        onChange={handleQuoteInput}
      />
      <S.DummyQuoteInput ref={dummyRef}>{newQuoteData.quote}</S.DummyQuoteInput>
      <label>
        {"p. "}
        <S.PageInput
          placeholder="페이지를 입력해주세요 (최대 5글자)"
          type="number"
          value={newQuoteData.page}
          onChange={handlePageInput}
        />
      </label>
      <S.PushButton>PUSH</S.PushButton>
      <S.CancelButton onClick={handleCancel}>
        <DeleteIcon width="15px" height="15px" stroke={theme.color.lightgray} />
      </S.CancelButton>
    </S.Form>
  );
}

export default QuoteCreateCard;
