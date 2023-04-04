"use client";
import { StackHeader, MonthlyStack } from "component";
import { IStackTemplateProps } from "type";

import * as S from "./StackTemplate.styles";

const dummyStackList = [
  {
    id: "1",
    no: 1,
    title: "스즈메의 문단속1",
    author: "신카이 마코토",
    date: "2023.03.13",
    img: "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791169791977.jpg",
  },
  {
    id: "2",
    no: 2,
    title: "스즈메의 문단속2",
    author: "신카이 마코토",
    date: "2023.03.13",
  },
  {
    id: "3",
    no: 3,
    title: "엄청 긴 제목목목목목목목목목",
    author: "신카이 마코토",
    date: "2023.03.13",
    img: "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791169791977.jpg",
  },
  {
    id: "4",
    no: 4,
    title: "The One Thing",
    author: "게리 켈러",
    date: "2023.03.13",
    img: "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788997575169.jpg",
  },
  {
    id: "5",
    no: 5,
    title: "스즈메의 문단속",
    author: "신카이 마코토",
    date: "2023.03.13",
    img: "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791169791977.jpg",
  },
];

function StackTemplate({ headerData, handleStackType }: IStackTemplateProps) {
  const { img, bookCount, pageCount, stackType } = headerData;

  return (
    <S.Container>
      <StackHeader
        img={img}
        bookCount={bookCount}
        pageCount={pageCount}
        stackType={stackType}
        handleStackType={handleStackType}
      />
      <div>
        <MonthlyStack
          month="Feb"
          stackType={stackType}
          stackList={dummyStackList}
          onStackClick={(v) => {
            console.log(v);
          }}
        />
      </div>
    </S.Container>
  );
}

export default StackTemplate;
