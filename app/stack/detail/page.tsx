"use client";
import { useSearchParams } from "next/navigation";
import { StackDetailTemplate } from "component";

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
  const no = useSearchParams().get("no");
  const handleQuoteData = () => {};
  return (
    <StackDetailTemplate
      bookInfo={dummyBookInfo}
      quoteList={dummyQuoteData}
      handleQuoteData={handleQuoteData}
    />
  );
}
