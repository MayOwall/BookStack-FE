"use client";
import { useState } from "react";
import { StackCreateTemplate } from "component";

const initBookInfo = {
  no: 0,
  title: "",
  author: "",
  publisher: "",
  date: "",
  detail: "",
};

export default function Create() {
  const [bookInfo, setBookInfo] = useState(initBookInfo);

  const handleBookInfo = (
    type: "title" | "author" | "publisher" | "date" | "detail",
    v: string
  ) => {
    const nextData = {
      ...bookInfo,
      [type]: v,
    };
    setBookInfo(() => nextData);
  };

  return (
    <StackCreateTemplate bookInfo={bookInfo} handleBookInfo={handleBookInfo} />
  );
}
