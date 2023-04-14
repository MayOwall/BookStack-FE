import { useRouter } from "next/navigation";
import { BookInfoEditor, Button } from "component";
import { BackIcon } from "public";
import { IStackCreateTemplateProps } from "type";
import * as S from "./StackCreate.styles";

function StackCreateTemplate({
  bookInfo,
  handleBookInfo,
  handleSubmit,
}: IStackCreateTemplateProps) {
  const router = useRouter();
  const handleBack = () => {
    const answer = confirm(
      "지금까지 작성된 모든 데이터가 사라집니다. 페이지를 나가시겠어요?"
    );
    if (answer) router.back();
  };

  return (
    <S.Container>
      <S.CoverContainer></S.CoverContainer>
      <S.BookInfoContainer>
        <BackIcon />
        <S.BackIconBackground onClick={handleBack} />
        <BookInfoEditor bookInfo={bookInfo} handleBookInfo={handleBookInfo} />
      </S.BookInfoContainer>
      <Button
        buttonType="largeFill"
        width="calc(100% - 64px)"
        onClick={handleSubmit}
      >
        Push
      </Button>
    </S.Container>
  );
}

export default StackCreateTemplate;
