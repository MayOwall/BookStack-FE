import { useState } from "react";
import * as S from "./StackDetail.styles";
import { BookInfo } from "component";

const dummyBookInfo = {
  no: 1,
  title: "스즈메의 문단속",
  author: "신카이 마코토",
  publisher: "대원씨아이",
  date: "2023.03.13",
  detail: "",
};
function StackDetailTemplate() {
  const [bookInfo, setBookInfo] = useState(dummyBookInfo);

  const handleBookInfo = (type: string, v: number | string) => {
    if (type === "no") {
      const nextData = {
        ...bookInfo,
        no: Number(v),
      };
      setBookInfo(() => nextData);
    }
    if (type !== "no") {
      const nextData = {
        ...bookInfo,
        [type]: String(v),
      };
      setBookInfo(() => nextData);
    }
  };
  return (
    <S.Container>
      <S.BannerContainer></S.BannerContainer>
      <S.DetailContainer>
        {!!bookInfo && (
          <BookInfo bookInfo={bookInfo} handleBookInfo={handleBookInfo} />
        )}
      </S.DetailContainer>
    </S.Container>
  );
}
export default StackDetailTemplate;
