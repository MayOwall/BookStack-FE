"use client";
import { useState, useEffect } from "react";
import { StackDetailTemplate } from "component";

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
        _id: "1",
        page: 103,
        quote:
          "몽환적인 밤하늘 아래, 펼쳐진 초원 속의 폐허를 숨가쁘게 돌아다니며 어머니를 찾는 어린 시절의 스즈메를 보여 주면서 영화가 시작된다.",
      },
      {
        _id: "2",
        page: 108,
        quote: "중요한 일은 다른사람이 볼 수 없는 것이 나아.",
      },
    ],
  },
];

export default function StackDetailPage() {
  const [bookInfo, setBookInfo] = useState(dummyBookInfo);
  const [quoteData, setQuoteData] = useState(dummyQuoteData);
  const [cover, setCover] = useState("");

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

  const handleCover = (v: string) => {
    setCover(() => v);
  };

  const handleQuoteData = (
    type: "push" | "edit" | "delete",
    data: { _id?: string; quote?: string; page?: number }
  ) => {
    if (type === "push") {
      // quote와 string을 바탕으로 새로운 quoteData를 생성하고, 서버에 보내기
    }
    if (type === "delete") {
      // 서버에 지울 data 보내기 (bookId, quoteId);
    }
  };

  useEffect(() => {
    localStorage.setItem("tempBookInfo", JSON.stringify(bookInfo));
  }, [bookInfo]);

  return (
    <div>
      <StackDetailTemplate
        bookInfo={bookInfo}
        handleBookInfo={handleBookInfo}
        quoteData={quoteData}
        handleQuoteData={handleQuoteData}
        cover={cover}
        handleCover={handleCover}
      />
    </div>
  );
}
