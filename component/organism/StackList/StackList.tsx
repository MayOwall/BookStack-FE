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

  const handleStackClick = (_id: string) => {
    router.push(`/stack/detail?_id=${_id}`);
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
                      const { _id, title, author, no, date, img } = v;
                      return (
                        <S.StackBook
                          key={_id}
                          className="stackbook"
                          onClick={() => handleStackClick(_id)}
                        >
                          <div>
                            <span>{`# ${no.toString().padStart(3, "0")}`}</span>
                            <h5>{title}</h5>
                            <small>{author}</small>
                            <small>{date}</small>
                          </div>
                          {img && (
                            <S.BookImage>
                              <Image src={img} fill alt="book image" />
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
                        key={v._id}
                        onClick={() => handleStackClick(v._id)}
                      >
                        {v.img && <Image src={v.img} fill alt="book image" />}
                        {!v.img && <span>{v.title}</span>}
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
