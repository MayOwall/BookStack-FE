import { DeleteIcon } from "public";
import { theme } from "style";
import { IQuoteCardProps } from "type";
import * as S from "./QuoteCard.styles";

function QuoteCard({ quote, page, handleQuoteDelete }: IQuoteCardProps) {
  // 삭제 quote 데이터를 위로 올려주는`
  const handleDeleteClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    const { innerText } = target.closest(".quote")
      ?.children[0] as HTMLDivElement;

    handleQuoteDelete(innerText);
  };
  return (
    <S.Container className="quote">
      <S.Quote>{quote}</S.Quote>
      <S.Page>{`p. ${page}`}</S.Page>
      <S.DeleteButton onClick={handleDeleteClick}>
        <DeleteIcon width="15px" height="15px" stroke={theme.color.lightgray} />
      </S.DeleteButton>
    </S.Container>
  );
}

export default QuoteCard;
