import { useState, useRef, useEffect } from "react";
import { render } from "react-dom";
import * as S from "./BookInfo.styles";

interface IBookInfoProps {
  bookInfo: {
    no: number;
    title: string;
    author: string;
    publisher: string;
    date: string;
    detail: string;
  };
  handleBookInfo: (type: string, v: string | number) => void;
}

function BookInfo({ bookInfo, handleBookInfo }: IBookInfoProps) {
  const { no, title, author, publisher, date, detail } = bookInfo;

  const authorRef = useRef<HTMLDivElement | null>(null);
  const publisherRef = useRef<HTMLDivElement | null>(null);
  const [authorStyle, setAuthorStyle] = useState<any>({});
  const [publisherStyle, setPublisherStyle] = useState<any>({});

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
      <S.No>No. {no.toString().padStart(3, "0")}</S.No>
      <S.Title
        value={title}
        onChange={(e) => handleBookInfo("title", e.target.value)}
        placeholder="Title"
      />
      <div>
        <S.Author ref={authorRef} style={authorStyle}>
          <input
            value={author}
            onChange={(e) => handleBookInfo("author", e.target.value)}
            placeholder="Author"
          />
          <S.DummyAuthor className="dummy">{author}</S.DummyAuthor>
        </S.Author>

        <S.Publisher ref={publisherRef} style={publisherStyle}>
          <input
            value={publisher}
            onChange={(e) => handleBookInfo("publisher", e.target.value)}
            placeholder="Publisher"
          />
          <S.DummyPublisher>{publisher}</S.DummyPublisher>
        </S.Publisher>
      </div>
      <S.Date>
        <div>Stack Date</div>
        <div>{date}</div>
      </S.Date>
      <div>
        <S.Detail
          value={detail}
          onChange={(e) => handleBookInfo("detail", e.target.value)}
          placeholder="Book Info : 최대 300자"
          maxLength={300}
        />
        <S.Img></S.Img>
      </div>
    </S.Container>
  );
}

export default BookInfo;
