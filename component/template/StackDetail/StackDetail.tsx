import { useState } from "react";
import * as S from "./StackDetail.styles";
import { QuoteStack, BookInfo } from "component";

const dummyBookInfo = {
  no: 1,
  title: "스즈메의 문단속",
  author: "신카이 마코토",
  publisher: "대원씨아이",
  date: "2023.03.13",
  detail: "",
};

const dummyQuoteData = [
  {
    date: "2023.03.13",
    quoteList: [
      {
        page: 103,
        quote:
          "몽환적인 밤하늘 아래, 펼쳐진 초원 속의 폐허를 숨가쁘게 돌아다니며 어머니를 찾는 어린 시절의 스즈메를 보여 주면서 영화가 시작된다.",
      },
      {
        page: 108,
        quote: "중요한 일은 다른사람이 볼 수 없는 것이 나아.",
      },
    ],
  },
];

function StackDetailTemplate() {
  const [bookInfo, setBookInfo] = useState(dummyBookInfo);
  const [quoteData, setQuoteData] = useState(dummyQuoteData);

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
        <QuoteStack data={quoteData} handleData={setQuoteData} />
      </S.DetailContainer>
    </S.Container>
  );
}
export default StackDetailTemplate;
