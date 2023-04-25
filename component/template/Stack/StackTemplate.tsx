"use client";
import { StackHeader, StackList } from "component";
import { IStackTemplateProps } from "type";

import * as S from "./StackTemplate.styles";

function StackTemplate({ headerData, stackData }: IStackTemplateProps) {
  const { profileImg, bookCount } = headerData;

  return (
    <S.Container>
      <StackHeader profileImg={profileImg} bookCount={bookCount} />
      <StackList stackData={stackData}/>
    </S.Container>
  );
}

export default StackTemplate;
