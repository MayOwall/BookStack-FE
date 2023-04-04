"use client";
import { StackHeader } from "component";
import { IStackTemplateProps } from "type";

import * as S from "./StackTemplate.styles";

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
    </S.Container>
  );
}

export default StackTemplate;
