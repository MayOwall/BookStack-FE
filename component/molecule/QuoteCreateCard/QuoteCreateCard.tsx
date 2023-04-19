import { useState, useRef } from "react";
import { Button } from "component";
import { DeleteIcon } from "public";
import { IQuoteCreateCardProps } from "type";
import { dateFormatter } from "hooks";
import { lightMode as theme } from "style";
import * as S from "./QuoteCreateCard.styles";

function QuoteCreateCard({ handlePush, handleCancel }: IQuoteCreateCardProps) {
  const [newQuoteData, setNewQuoteData] = useState({
    _id: "",
    date: dateFormatter(new Date()),
    quote: "",
    note: "",
    page: "",
  });
  const [quoteInputStyle, setQuoteInputStyle] = useState<any>({});
  const [noteInputStyle, setNoteInputStyle] = useState<any>({});
  const quoteRef = useRef<HTMLTextAreaElement | null>(null);
  const dummyQuoteRef = useRef<HTMLDivElement | null>(null);
  const noteRef = useRef<HTMLTextAreaElement | null>(null);
  const dummyNoteRef = useRef<HTMLDivElement | null>(null);

  // quote input style 핸들러 (높이 조절용)
  const handleQuoteInputStyle = () => {
    const { offsetHeight } = dummyQuoteRef.current as HTMLDivElement;
    const nextData = {
      ...quoteInputStyle,
      height: offsetHeight,
    };
    if (quoteRef.current) {
      setQuoteInputStyle(() => nextData);
    }
  };

  // note input style 핸들러 (높이 조절용)
  const handleNoteInputStyle = () => {
    const { offsetHeight } = dummyNoteRef.current as HTMLDivElement;
    const nextData = {
      ...noteInputStyle,
      height: offsetHeight,
    };
    if (noteRef.current) {
      setNoteInputStyle(() => nextData);
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

  // input값 핸들러
  const handleNoteInput = (e: React.FormEvent) => {
    const { value } = e.target as HTMLTextAreaElement;
    const nextData = {
      ...newQuoteData,
      note: value,
    };
    setNewQuoteData(() => nextData);
    handleNoteInputStyle();
  };

  // page값 핸들러
  const handlePageInput = (e: React.FormEvent) => {
    const { value } = e.target as HTMLInputElement;
    const nextData = {
      ...newQuoteData,
      page: value.slice(0, 10),
    };
    setNewQuoteData(() => nextData);
  };

  const handleSubmit = () => {
    const nextData = {
      ...newQuoteData,
      page: parseInt(newQuoteData.page),
    };
    handlePush(nextData);
  };

  return (
    <S.Container>
      <Button buttonType="smallFill" width="100%" onClick={handleSubmit}>
        Push new Quote
      </Button>
      <S.Form onSubmit={handleSubmit}>
        <div>
          <S.Date>{newQuoteData.date}</S.Date>
          <S.QuoteInput
            placeholder="책 내용 / 명언 (최대 150글자)"
            maxLength={150}
            style={quoteInputStyle}
            ref={quoteRef}
            value={newQuoteData.quote}
            onChange={handleQuoteInput}
          />
          <S.DummyQuoteInput ref={dummyQuoteRef}>
            {newQuoteData.quote}
          </S.DummyQuoteInput>
          <S.NoteInput
            placeholder="코멘트 (최대 150자)"
            value={newQuoteData.note}
            onChange={handleNoteInput}
            ref={noteRef}
            maxLength={150}
            style={noteInputStyle}
          />
          <S.DummyNote ref={dummyNoteRef}>{newQuoteData.note}</S.DummyNote>
          <S.PageInput>
            <span>p. </span>
            <input
              value={newQuoteData.page}
              onChange={handlePageInput}
              placeholder="페이지"
              type="number"
            />
          </S.PageInput>
        </div>
        <S.CancelButton onClick={handleCancel}>
          <DeleteIcon width="17px" height="17px" stroke={theme.color[2]} />
        </S.CancelButton>
      </S.Form>
    </S.Container>
  );
}

export default QuoteCreateCard;
