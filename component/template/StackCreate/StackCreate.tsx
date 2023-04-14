import { BookInfoEditor, RoundButton } from "component";
import { IStackCreateTemplateProps } from "type";
import * as S from "./StackCreate.styles";

function StackCreateTemplate({
  bookInfo,
  handleBookInfo,
}: IStackCreateTemplateProps) {
  return (
    <S.Container>
      <S.CoverContainer></S.CoverContainer>
      <S.BookInfoContainer>
        <BookInfoEditor bookInfo={bookInfo} handleBookInfo={handleBookInfo} />
        <RoundButton type="fill" onClick={() => {}} height="60px">
          Push New Book
        </RoundButton>
      </S.BookInfoContainer>
    </S.Container>
  );
}

export default StackCreateTemplate;
