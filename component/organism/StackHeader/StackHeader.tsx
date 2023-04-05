"use client";
import Image from "next/image";
import Link from "next/link";
import { NumericalData } from "component";
import { InfoIcon, StackIcon, ShelfIcon } from "public";
import { IStackHeaderProps } from "type";
import * as S from "./StackHeader.styles";
import { theme } from "style";

function StackHeader({
  profileImg,
  bookCount,
  pageCount,
  stackType,
  handleStackType,
}: IStackHeaderProps) {
  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLSpanElement;
    const name = target.closest("span")?.className;
    if (name === "stack" || name === "shelf") {
      handleStackType(name);
    }
  };

  return (
    <S.Container>
      <S.Upper>
        <S.Title>
          <h1>Bookstack</h1>
          <S.IconContainer>
            <InfoIcon />
          </S.IconContainer>
        </S.Title>
        <S.Profile>
          <Link href="/profile">
            <Image src={profileImg} fill alt="profile" />
          </Link>
        </S.Profile>
      </S.Upper>
      <S.Bottom>
        <div>
          <NumericalData label="Books" data={bookCount} />
          <NumericalData label="Pages" data={pageCount} />
        </div>
        <div>
          <span className="stack" onClick={handleClick}>
            <StackIcon
              stroke={
                stackType === "stack"
                  ? theme.color.darkgray
                  : theme.color.lightgray
              }
            />
          </span>
          <span className="shelf" onClick={handleClick}>
            <ShelfIcon
              stroke={
                stackType === "shelf"
                  ? theme.color.darkgray
                  : theme.color.lightgray
              }
            />
          </span>
        </div>
      </S.Bottom>
    </S.Container>
  );
}

export default StackHeader;
