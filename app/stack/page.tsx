"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getStack } from "api";
import { StackTemplate } from "component";
import { IStackProps } from "@/type/component/molecule";

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
  const router = useRouter();
  const [headerData, setHeaderData] = useState({ ...dummyHeader });
  const [stackData, setStackData] =
    useState<{ month: string; stackList: IStackProps[] }[] | null>(null);

  const handleStackType = (v: "stack" | "shelf") => {
    const nextheaderData = {
      ...headerData,
      stackType: v,
    };
    setHeaderData(() => nextheaderData);
  };

  const getStackData = async () => {
    try {
      const data = await getStack();
      setStackData(() => data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      alert("로그인 만료. 다시 로그인해 주세요");
      return router.push("/signin");
    }
    getStackData();
  }, []);

  return (
    <>
      {!!stackData && (
        <StackTemplate
          headerData={headerData}
          handleStackType={handleStackType}
          stackData={stackData}
        />
      )}
    </>
  );
}
