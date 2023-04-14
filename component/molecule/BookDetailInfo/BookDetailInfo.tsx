import * as S from "./BookDetailInfo.styles";

interface IBookDetailInfo {
  bookInfo: {
    no: number;
    title: string;
    author: string;
    publisher: string;
    date: string;
    detail: string;
  };
}
function BookDetailInfo({ bookInfo }: IBookDetailInfo) {
  const { no, title, author, date, publisher, detail } = bookInfo;
  return (
    <S.Container>
      <S.No>No. {no.toString().padStart(3, "0")}</S.No>
      <S.Date>{date}</S.Date>
      <S.Title>{title}</S.Title>
      <S.AuthPubContainer>
        <small>{author}</small>
        <small>{publisher}</small>
      </S.AuthPubContainer>
      <S.Detail>{detail}</S.Detail>
    </S.Container>
  );
}

export default BookDetailInfo;
