"use client";
import { useState } from "react";
import { StackHeader, StackList, StackCreateTemplate } from "component";
import { IStackTemplateProps } from "type";

import * as S from "./StackTemplate.styles";

const initBookInfo = {
  no: 0,
  title: "",
  author: "",
  publisher: "",
  date: "",
  detail: "",
};

function StackTemplate({
  headerData,
  handleStackType,
  stackData,
}: IStackTemplateProps) {
  const { profileImg, bookCount, pageCount, stackType } = headerData;
  const [isVisible, setVisible] = useState(false);

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
      {isVisible && (
        <S.CreateContainer>
          <StackCreateTemplate
            bookInfo={initBookInfo}
            handleBookInfo={() => {}}
          />
        </S.CreateContainer>
      )}
    </S.Container>
  );
}

export default StackTemplate;
