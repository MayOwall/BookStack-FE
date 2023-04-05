"use client";
import { StackHeader, StackList } from "component";
import { IStackTemplateProps } from "type";

import * as S from "./StackTemplate.styles";

function StackTemplate({
  headerData,
  handleStackType,
  stackData,
}: IStackTemplateProps) {
  const { profileImg, bookCount, pageCount, stackType } = headerData;

  return (
    <S.Container>
      <StackHeader
        profileImg={profileImg}
        bookCount={bookCount}
        pageCount={pageCount}
        stackType={stackType}
        handleStackType={handleStackType}
      />
      <div>
        <StackList
          stackType={stackType}
          stackData={stackData}
          onStackClick={(v) => console.log(v)}
        />
      </div>
    </S.Container>
  );
}

export default StackTemplate;
