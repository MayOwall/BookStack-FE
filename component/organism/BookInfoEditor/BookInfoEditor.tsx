import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { dateFormatter } from "hooks";
import { IBookInfoProps } from "type";
import { postImage } from "api";
import * as S from "./BookInfoEditor.styles";

function BookInfoEditor({ bookInfo, handleBookInfo }: IBookInfoProps) {
  const { no, title, author, publisher, date, detail } = bookInfo;
  const [tempBookImage, setTempBookImage] = useState("");

  const titleRef = useRef<HTMLDivElement | null>(null);
  const [titleStyle, setTitleStyle] = useState<any>({});
  const bookImageRef = useRef<HTMLInputElement | null>(null);

  const handleBookImageButton = () => {
    if (bookImageRef.current) {
      bookImageRef.current.click();
    }
  };

  const handleBookImageInput = async (e: React.ChangeEvent) => {
    const { files } = e.target as HTMLInputElement;
    if (!files) return;
    const file = files[0];

    // temp img 적용;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      if (reader.readyState === 2) {
        setTempBookImage(() => e.target.result);
      }
    };

    // const formData = new FormData();
    // formData.append("image", file);
    // try {
    //   //
    //   const imageRes = await postImage("bookImage", formData);
    //   const image_URL = imageRes.data.imageURL;
    // } catch (err) {
    //   console.log(err);
    // }
  };

  // title 입력창 세로 길이 자동 조정
  useEffect(() => {
    if (titleRef.current) {
      const { offsetHeight } = titleRef.current;
      const nextData = {
        height: `${offsetHeight}px`,
      };
      setTitleStyle(() => nextData);
    }
  }, [title]);

  return (
    <S.Container>
      <S.No>No. {no ? no.toString().padStart(3, "0") : "_"}</S.No>
      <S.Date>{date ? date : dateFormatter(new Date())}</S.Date>
      <S.Title
        value={title}
        onChange={(e) => handleBookInfo("title", e.target.value)}
        placeholder="Title"
        maxLength={30}
        style={titleStyle}
      />
      <S.DummyTitle ref={titleRef}>{title}</S.DummyTitle>
      <S.InfoContainer>
        <div>
          <S.Author
            value={author}
            onChange={(e) => handleBookInfo("author", e.target.value)}
            placeholder="Author"
            maxLength={30}
          />
          <S.Publisher
            value={publisher}
            onChange={(e) => handleBookInfo("publisher", e.target.value)}
            placeholder="Publisher"
            maxLength={20}
          />
          <S.Detail
            value={detail}
            onChange={(e) => handleBookInfo("detail", e.target.value)}
            placeholder="Book Info (최대 300자)"
            maxLength={300}
          />
        </div>
        <S.BookImageContainer onClick={handleBookImageButton}>
          {!tempBookImage && (
            <>
              <div>
                ADD
                <br />
                Book Image
              </div>
            </>
          )}
          {!!tempBookImage && (
            <S.TempBookImage onClick={handleBookImageButton}>
              <Image src={tempBookImage} fill alt="" />
            </S.TempBookImage>
          )}
          <input
            type="file"
            ref={bookImageRef}
            accept=".jpeg,.png"
            onChange={handleBookImageInput}
          />
        </S.BookImageContainer>
      </S.InfoContainer>
    </S.Container>
  );
}

export default BookInfoEditor;
