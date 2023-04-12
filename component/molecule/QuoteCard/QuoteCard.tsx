import { DeleteIcon } from "public";
import { theme } from "style";
import { IQuoteCardProps } from "type";
import * as S from "./QuoteCard.styles";

function QuoteCard({ _id, quote, page, handleQuoteDelete }: IQuoteCardProps) {
  // 삭제 quote id를 상위 컴포넌트로 올려주는 핸들러
  const handleDeleteClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    const card = target.closest(".quote") as HTMLDivElement;
    const { _id } = card.dataset;
    !!_id && handleQuoteDelete(_id);
  };
  return (
    <S.Container className="quote" data-_id={_id}>
      <S.Quote>{quote}</S.Quote>
      <S.Page>{`p. ${page}`}</S.Page>
      <S.DeleteButton onClick={handleDeleteClick}>
        <DeleteIcon width="15px" height="15px" stroke={theme.color.lightgray} />
      </S.DeleteButton>
    </S.Container>
  );
}

export default QuoteCard;
