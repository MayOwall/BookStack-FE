import Image from "next/image";
import * as S from "./BookDetailInfo.styles";

interface IBookDetailInfo {
  bookInfo: {
    no: number;
    title: string;
    author: string;
    publisher: string;
    date: string;
    detail: string;
    bookImage: string;
  };
}
function BookDetailInfo({ bookInfo }: IBookDetailInfo) {
  const { no, title, author, date, publisher, detail, bookImage } = bookInfo;
  return (
    <S.Container>
      <S.No>No. {no.toString().padStart(3, "0")}</S.No>
      <S.Date>{date}</S.Date>
      <S.Title>{title}</S.Title>
      <S.BottomContainer>
        <div>
          <S.Author>{author}</S.Author>
          <S.Publisher>{publisher}</S.Publisher>
          <S.Detail>{detail}</S.Detail>
        </div>
        <S.BookImage>
          <Image src={bookImage} fill sizes="10vw" alt="book image" />
        </S.BookImage>
      </S.BottomContainer>
    </S.Container>
  );
}

export default BookDetailInfo;
