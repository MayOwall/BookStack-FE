import Image from "next/image";
import { useRef } from "react";
import * as S from "./StackDetail.styles";
import { QuoteStack, BookInfo } from "component";
import { IStackDetailTemplateProps } from "type";

function StackDetailTemplate({
  bookInfo,
  handleBookInfo,
  quoteData,
  handleQuoteData,
  cover,
  handleCover,
}: IStackDetailTemplateProps) {
  const ref = useRef<HTMLInputElement | null>(null);
  const handleCoverButton = (e: React.MouseEvent) => {
    alert("아직 개발중인 기능입니다. 다음 업데이트를 기대해주세요 :)");
    // if (ref.current) {
    //   ref.current.click();
    // }
  };
  return (
    <S.Container>
      <S.CoverContainer>
        {!!cover && <Image src={cover} fill alt="cover image" />}
        <S.CoverButton onClick={handleCoverButton}>
          Change Cover
          <input type="file" ref={ref} />
        </S.CoverButton>
      </S.CoverContainer>
      <S.DetailContainer>
        {!!bookInfo && (
          <BookInfo bookInfo={bookInfo} handleBookInfo={handleBookInfo} />
        )}
        <QuoteStack data={quoteData} handleData={handleQuoteData} />
      </S.DetailContainer>
    </S.Container>
  );
}
export default StackDetailTemplate;
