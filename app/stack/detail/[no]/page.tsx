"use client";
import { usePathname } from "next/navigation";
import { useRef, useState, useLayoutEffect, useEffect } from "react";
import { StackDetailTemplate, QuoteCard, BottomUpModal } from "component";
import { QuoteCardData, BookInfoData as temp } from "type";
import { getStackDetail, postQuoteCreate, postQuoteDelete } from "api";

interface BookInfoData extends temp {
  no: number;
}

export default function StackDetailPage() {
  const [bookInfo, setBookInfo] = useState<BookInfoData | null>(null);
  const [quoteList, setQuoteList] = useState<QuoteCardData[] | null>(null);
  const no = usePathname().replace("/stack/detail/", "");
  const [quoteCards, setQuoteCards] = useState<JSX.Element | null>(null);
  const [isQuoteModalShown, setQuoteModalShown] = useState(false);
  const selectedQuote = useRef<any>(null);

  // quoteModal용 prop
  const quoteModalItems = [
    {
      content: "Edit",
      onClick: () => {
        setQuoteModalShown(false);
      },
    },
    {
      content: "Delete",
      onClick: () => {
        handleQuoteData("delete", selectedQuote.current);
        setQuoteModalShown(false);
      },
    },
  ];

  // quoteData 핸들러
  const handleQuoteData = async (
    type: "push" | "edit" | "delete",
    data: QuoteCardData
  ) => {
    if (type === "push" && !!quoteList) {
      const nextQuoteList = [...quoteList, data];
      setQuoteList(() => nextQuoteList);

      try {
        const result = await postQuoteCreate(Number(no), data);
        if (result.error) throw new Error();
      } catch (err) {
        console.log(err);
      }
      return;
    }
    // quote 삭제 핸들러
    if (type === "delete" && !!quoteList) {
      const nextQuoteList = quoteList.filter(
        (v) => v._id !== selectedQuote.current._id
      );
      setQuoteList(() => nextQuoteList);

      try {
        if (bookInfo) {
          const result = await postQuoteDelete(
            bookInfo.no.toString(),
            selectedQuote.current._id
          );
          if (result.error) throw new Error();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  // quoteList 데이터에 따른 quoteCard를 렌더링하는 핸들러
  const handleQuoteCards = () => {
    if (quoteList) {
      const nextQuoteCards = (
        <>
          {quoteList.map((quotedata, i) => (
            <QuoteCard
              key={`QuoteCard${i}`}
              data={quotedata}
              handleMeatball={handleMeatball}
            />
          ))}
        </>
      );
      setQuoteCards(() => nextQuoteCards);
    }
  };

  // QuoteCardMeatball 핸들러
  const handleMeatball = (quoteCardId: string) => {
    if (quoteList) {
      selectedQuote.current = quoteList.find((v) => v._id === quoteCardId);
      setQuoteModalShown(true);
    }
  };

  // 페이지의 data를 fetch하는 함수
  const getDetailPageData = async () => {
    const data = await getStackDetail(no);
    if (!data) throw new Error("no such data");

    const { title, author, publisher, date, detail } = data;
    const nextBookInfo = {
      no: Number(no),
      title,
      author,
      publisher,
      date,
      detail,
    };
    setBookInfo(() => nextBookInfo);
    setQuoteList(() => data.quoteList);
  };

  useLayoutEffect(() => {
    try {
      if (!no || typeof Number(no) !== "number") {
        alert("잘못된 접근");
        return;
      }
      getDetailPageData();
    } catch (err) {
      console.log(err);
      return;
    }
  }, []);

  useEffect(() => {
    handleQuoteCards();
  }, [quoteList]);

  return (
    <>
      {!!bookInfo && !!quoteCards && (
        <StackDetailTemplate
          bookInfo={bookInfo}
          quoteCards={quoteCards}
          handleQuoteData={handleQuoteData}
        />
      )}
      {isQuoteModalShown && (
        <BottomUpModal
          items={quoteModalItems}
          cancel={() => setQuoteModalShown(false)}
        />
      )}
    </>
  );
}
