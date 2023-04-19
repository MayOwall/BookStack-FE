"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { StackDetailTemplate } from "component";
import { QuoteCardData } from "type";
import { postQuoteCreate } from "@/api";

const dummyBookInfo = {
  no: 18,
  title: "new book",
  author: "작가",
  publisher: "출판사",
  date: "2023.03.13",
  detail: "안녕하세요, 새 책입니다.",
};

const dummyQuoteData = [
  {
    _id: "1",
    date: "2023.03.13",
    quote: "123",
    page: 12,
    note: "약간의 코멘트",
  },
  {
    _id: "2",
    date: "2023.03.13",
    quote: "123",
    page: 12,
    note: "약간의 코멘트",
  },
];

export default function StackDetailPage() {
  const [quoteList, setQuoteList] = useState(dummyQuoteData);
  const no = useSearchParams().get("no");
  if (!no) {
    alert("잘못된 접근");
    return;
  }

  const handleQuoteData = async (
    type: "push" | "edit" | "delete",
    data: QuoteCardData
  ) => {
    if (type === "push") {
      const nextQuoteList = [...quoteList, data];
      setQuoteList(() => nextQuoteList);
      try {
        const result = await postQuoteCreate(Number(no), data);
        console.log("push quote", result);
      } catch (err) {
        console.log(err);
      }
      return;
    }
  };

  return (
    <StackDetailTemplate
      bookInfo={dummyBookInfo}
      quoteList={quoteList}
      handleQuoteData={handleQuoteData}
    />
  );
}
