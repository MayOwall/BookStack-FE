import { useRouter } from "next/navigation";
import { BookDetailInfo, QuoteStack } from "component";
import { IStackDetailTemplateProps } from "type";
import { BackIcon, MeatballsIcon } from "public";
import * as S from "./StackDetail.styles";

function StackDetailTemplate({
  bookInfo,
  quoteData,
  handleQuoteData,
}: IStackDetailTemplateProps) {
  const router = useRouter();
  const handleBackIcon = () => {
    router.back();
  };
  const handleMeathballIcon = () => {};
  return (
    <S.Container>
      <S.CoverContainer></S.CoverContainer>
      <S.DetailContainer>
        <S.IconContainer>
          <BackIcon /> <MeatballsIcon />
          <S.BackIconBackground onClick={handleBackIcon} />
          <S.MeatballIconBackground onClick={handleMeathballIcon} />
        </S.IconContainer>
        <BookDetailInfo bookInfo={bookInfo} />
        <QuoteStack quoteData={quoteData} handleQuoteData={handleQuoteData} />
      </S.DetailContainer>
    </S.Container>
  );
}
export default StackDetailTemplate;
