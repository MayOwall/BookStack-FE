import { MeatballsIcon } from "public";
import { IQuoteCardProps } from "type";
import * as S from "./QuoteCard.styles";

function QuoteCard({
  _id,
  quote,
  page,
  note,
  handleQuoteEdit,
}: IQuoteCardProps) {
  return (
    <S.Container className="quote" data-_id={_id}>
      <div>
        <S.Quote>{quote}</S.Quote>
        <S.Note>{note}</S.Note>
        <S.Page>{`p. ${page}`}</S.Page>
      </div>
      <MeatballsIcon />
      <S.MeatballIconBackground onClick={() => handleQuoteEdit(_id)} />
    </S.Container>
  );
}

export default QuoteCard;
