import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Button } from "component";
import { StackIcon, ShelfIcon } from "public";
import { IStackListProps } from "type";
import * as S from "./StackList.styles";
import { lightMode as theme } from "style";

function StackList({ stackData }: IStackListProps) {
  const [stackType, setStackType] = useState("shelf");
  const router = useRouter();
  const handleIcon = (v: "stack" | "shelf") => {
    stackType !== v && setStackType(() => v);
  };

  const handleStackClick = (no: number) => {
    router.push(`/stack/detail/${no}`);
  };

  return (
    <S.Container>
      <Button
        buttonType="largeFill"
        width="100%"
        onClick={() => router.push("/stack/create")}
      >
        + 새 책 생성하기
      </Button>
      <S.Stacks>
        <header>
          <h3>2023</h3>
          <S.IconContainer>
            <ShelfIcon
              width="20"
              height="20"
              stroke={stackType === "shelf" ? theme.color[4] : theme.color[2]}
              onClick={() => handleIcon("shelf")}
            />
            <StackIcon
              width="20"
              height="20"
              stroke={stackType === "stack" ? theme.color[4] : theme.color[2]}
              onClick={() => handleIcon("stack")}
            />
          </S.IconContainer>
        </header>
        <S.StackContainer>
          {stackData.map((stack, i) => {
            const { month, stackList } = stack;
            return (
              <S.Stack key={i}>
                <h4>{month}</h4>
                {stackType === "stack" && (
                  <S.StackBookContainer>
                    {stackList.map((v) => {
                      const { title, author, no, date, bookImage } = v;
                      return (
                        <S.StackBook
                          key={no}
                          className="stackbook"
                          onClick={() => handleStackClick(no)}
                        >
                          <div>
                            <span>{`# ${no.toString().padStart(3, "0")}`}</span>
                            <h5>{title}</h5>
                            <small>{author}</small>
                            <small>{date}</small>
                          </div>
                          {bookImage && (
                            <S.BookImage>
                              <Image src={bookImage} fill alt="book image" />
                            </S.BookImage>
                          )}
                        </S.StackBook>
                      );
                    })}
                  </S.StackBookContainer>
                )}
                {stackType === "shelf" && (
                  <S.ShelfBookContainer>
                    {stackList.map((v) => (
                      <S.ShelfBook
                        key={v.no}
                        onClick={() => handleStackClick(v.no)}
                      >
                        {v.bookImage && (
                          <Image src={v.bookImage} fill alt="book image" />
                        )}
                        {!v.bookImage && <span>{v.title}</span>}
                      </S.ShelfBook>
                    ))}
                  </S.ShelfBookContainer>
                )}
              </S.Stack>
            );
          })}
        </S.StackContainer>
      </S.Stacks>
    </S.Container>
  );
}

export default StackList;
