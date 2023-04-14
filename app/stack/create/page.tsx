"use client";
import { useState } from "react";
import { StackCreateTemplate } from "component";

const initBookInfo = {
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

  const handleSubmit = () => {
    console.log(bookInfo);
  };

  return (
    <StackCreateTemplate
      bookInfo={bookInfo}
      handleBookInfo={handleBookInfo}
      handleSubmit={handleSubmit}
    />
  );
}
