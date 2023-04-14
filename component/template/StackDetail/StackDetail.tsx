import { BookDetailInfo, QuoteStack } from "component";
import { IStackDetailTemplateProps } from "type";
import * as S from "./StackDetail.styles";

function StackDetailTemplate({
  bookInfo,
  quoteData,
  handleQuoteData,
}: IStackDetailTemplateProps) {
  return (
    <S.Container>
      <S.CoverContainer></S.CoverContainer>
      <S.DetailContainer>
        <BookDetailInfo bookInfo={bookInfo} />
        <QuoteStack quoteData={quoteData} handleQuoteData={handleQuoteData} />
      </S.DetailContainer>
    </S.Container>
  );
}
export default StackDetailTemplate;
