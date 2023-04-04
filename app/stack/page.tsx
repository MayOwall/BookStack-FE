"use client";
import { useState } from "react";
import { StackTemplate } from "component";

const dummyHeader: {
  img: string;
  bookCount: number;
  pageCount: number;
  stackType: "shelf" | "stack";
} = {
  img: "https://avatars.githubusercontent.com/u/97934878?v=4",
  bookCount: 13,
  pageCount: 27385,
  stackType: "shelf",
};
export default function StackPage() {
  const [headerData, setHeaderData] = useState({ ...dummyHeader });

  const handleStackType = (v: "stack" | "shelf") => {
    const nextheaderData = {
      ...headerData,
      stackType: v,
    };
    setHeaderData(() => nextheaderData);
  };

  return (
    <StackTemplate headerData={headerData} handleStackType={handleStackType} />
  );
}
