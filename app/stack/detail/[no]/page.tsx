"use client";
import { usePathname } from "next/navigation";
import { useState, useLayoutEffect } from "react";
import { StackDetailTemplate } from "component";
import { QuoteCardData, BookInfoData as temp } from "type";
import { getStackDetail, postQuoteCreate } from "api";

interface BookInfoData extends temp {
  no: number;
}

export default function StackDetailPage() {
  const [bookInfo, setBookInfo] = useState<BookInfoData | null>(null);
  const [quoteList, setQuoteList] = useState<QuoteCardData[] | null>(null);
  const no = usePathname().replace("/stack/detail/", "");

  const handleQuoteData = async (
    type: "push" | "edit" | "delete",
    data: QuoteCardData
  ) => {
    if (type === "push" && !!quoteList) {
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

  const getDetailData = async () => {
    const data = await getStackDetail(no);
    if (!data) throw new Error("no such data");

    const { title, author, publisher, date, detail, quoteList } = data;
    const nextBookInfo = {
      no: Number(no),
      title,
      author,
      publisher,
      date,
      detail,
    };
    const nextQuoteList = [...quoteList];

    setBookInfo(() => nextBookInfo);
    setQuoteList(() => nextQuoteList);
  };

  useLayoutEffect(() => {
    try {
      if (!no || typeof Number(no) !== "number") {
        alert("잘못된 접근");
        return;
      }
      getDetailData();
    } catch (err) {
      console.log(err);
      return;
    }
  }, []);

  return (
    <>
      {!!bookInfo && !!quoteList && (
        <StackDetailTemplate
          bookInfo={bookInfo}
          quoteList={quoteList}
          handleQuoteData={handleQuoteData}
        />
      )}
    </>
  );
}
