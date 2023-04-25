"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { StackCreateTemplate } from "component";
import { dateFormatter } from "hooks";
import { postStackCreate } from "api";

const initBookInfo = {
  title: "",
  author: "",
  publisher: "",
  date: "",
  detail: "",
};

export default function Create() {
  const [bookInfo, setBookInfo] = useState(initBookInfo);
  const router = useRouter();

  const handleBookInfo = (
    type: "title" | "author" | "publisher" | "date" | "detail" | "bookImage",
    v: string
  ) => {
    const nextData = {
      ...bookInfo,
      [type]: v,
    };
    setBookInfo(() => nextData);
  };

  const handleSubmit = async () => {
    try {
      const nextData = {
        ...bookInfo,
        date: dateFormatter(new Date()),
      };
      const { result } = await postStackCreate(nextData);
      if (result === "success") router.push("stack");
    } catch (err: any) {
      console.log(err);
      if (err.result === "no token") {
        alert("로그인 만료");
        router.push("/login");
      } else {
        alert("에러 발생");
      }
    }
  };

  return (
    <StackCreateTemplate
      bookInfo={bookInfo}
      handleBookInfo={handleBookInfo}
      handleSubmit={handleSubmit}
    />
  );
}
