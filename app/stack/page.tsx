"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getStack } from "api";
import { StackTemplate } from "component";
import { StackHeaderData } from "type";
import { IStackProps } from "@/type/component/molecule";

export default function StackPage() {
  const router = useRouter();
  const [headerData, setHeaderData] = useState<StackHeaderData | null>(null);
  const [stackData, setStackData] =
    useState<{ month: string; stackList: IStackProps[] }[] | null>(null);

  const handleStackType = (v: "stack" | "shelf") => {
    if (headerData) {
      const nextHeaderData = {
        ...headerData,
        stackType: v,
      };
      setHeaderData(() => nextHeaderData);
    }
  };

  const getStackData = async () => {
    try {
      const data = await getStack();
      if (data.error) {
        alert("로그인 만료. 다시 로그인해 주세요");
        return router.push("/signin");
      }

      const { profileImg, bookCount, posts } = data;
      const nextHeaderData: StackHeaderData = {
        profileImg,
        bookCount,
      };
      setStackData(() => posts);
      setHeaderData(() => nextHeaderData);
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
    return;
  }, []);

  return (
    <>
      {!!stackData && !!headerData && (
        <StackTemplate headerData={headerData} stackData={stackData} />
      )}
    </>
  );
}
