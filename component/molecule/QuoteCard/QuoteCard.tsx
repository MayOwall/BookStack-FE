import { MeatballsIcon } from "public";
import { IQuoteCardProps } from "type";
import * as S from "./QuoteCard.styles";

function QuoteCard({ data, handleQuoteEdit }: IQuoteCardProps) {
  const { _id, date, quote, page, note } = data;
  return (
    <S.Container className="quote" data-_id={_id}>
      <div>
        <S.Date>{date}</S.Date>
        <S.Quote>{quote}</S.Quote>
        <S.Note>{note}</S.Note>
        <S.Page>{!!page ? `p. ${page}` : "페이지 없음"}</S.Page>
      </div>
      <S.MeatballContainer>
        <MeatballsIcon />
      </S.MeatballContainer>
    </S.Container>
  );
}

export default QuoteCard;
