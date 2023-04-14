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
    date: "2023.03.13",
    quoteList: [{ _id: "1", note: "약간의 코멘트", quote: "123", page: 12 }],
  },
  {
    date: "2023.03.13",
    quoteList: [{ _id: "1", note: "약간의 코멘트2", quote: "123", page: 12 }],
  },
];

export default function StackDetailPage() {
  const no = useSearchParams().get("no");
  const handleQuoteData = () => {};
  return (
    <StackDetailTemplate
      bookInfo={dummyBookInfo}
      quoteData={dummyQuoteData}
      handleQuoteData={handleQuoteData}
    />
  );
}
