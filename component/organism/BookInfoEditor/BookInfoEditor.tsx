import { useState, useRef, useEffect } from "react";
import { dateFormatter } from "hooks";
import { IBookInfoProps } from "type";
import * as S from "./BookInfoEditor.styles";

function BookInfoEditor({ bookInfo, handleBookInfo }: IBookInfoProps) {
  const { no, title, author, publisher, date, detail } = bookInfo;

  const titleRef = useRef<HTMLDivElement | null>(null);
  const authorRef = useRef<HTMLDivElement | null>(null);
  const publisherRef = useRef<HTMLDivElement | null>(null);
  const [titleStyle, setTitleStyle] = useState<any>({});
  const [authorStyle, setAuthorStyle] = useState<any>({});
  const [publisherStyle, setPublisherStyle] = useState<any>({});

  useEffect(() => {
    if (titleRef.current) {
      const { offsetHeight } = titleRef.current;
      const nextData = {
        height: `${offsetHeight}px`,
      };
      setTitleStyle(() => nextData);
    }
  }, [title]);
  useEffect(() => {
    if (authorRef.current) {
      const { offsetWidth } = authorRef.current.children[1] as HTMLDivElement;

      const nextData = {
        width: `${offsetWidth + 5}px`,
      };
      setAuthorStyle(() => nextData);
    }
  }, [author]);

  useEffect(() => {
    if (publisherRef.current) {
      const { offsetWidth } = publisherRef.current
        .children[1] as HTMLDivElement;

      const nextData = {
        width: `${offsetWidth + 5}px`,
      };
      setPublisherStyle(() => nextData);
    }
  }, [publisher]);

  return (
    <S.Container>
      <S.No>No. {no ? no.toString().padStart(3, "0") : ""}</S.No>
      <S.Date>{date ? date : dateFormatter(new Date())}</S.Date>
      <S.Title
        value={title}
        onChange={(e) => handleBookInfo("title", e.target.value)}
        placeholder="Title"
        maxLength={30}
        style={titleStyle}
      />
      <S.DummyTitle ref={titleRef}>{title}</S.DummyTitle>
      <S.AuthPublishContainer>
        <S.Author ref={authorRef} style={authorStyle}>
          <input
            value={author}
            onChange={(e) => handleBookInfo("author", e.target.value)}
            placeholder="Author"
            maxLength={30}
          />
          <S.DummyAuthor className="dummy">{author}</S.DummyAuthor>
        </S.Author>

        <S.Publisher ref={publisherRef} style={publisherStyle}>
          <input
            value={publisher}
            onChange={(e) => handleBookInfo("publisher", e.target.value)}
            placeholder="Publisher"
            maxLength={20}
          />
          <S.DummyPublisher>{publisher}</S.DummyPublisher>
        </S.Publisher>
      </S.AuthPublishContainer>
      <S.Detail
        value={detail}
        onChange={(e) => handleBookInfo("detail", e.target.value)}
        placeholder="Book Info (최대 300자)"
        maxLength={300}
      />
    </S.Container>
  );
}

export default BookInfoEditor;
