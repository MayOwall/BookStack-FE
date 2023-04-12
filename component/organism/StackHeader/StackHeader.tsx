"use client";
import Image from "next/image";
import Link from "next/link";
import { NumericalData } from "component";
import { InfoIcon, MeatballsIcon, defaultProfileImage } from "public";
import { IStackHeaderProps } from "type";
import * as S from "./StackHeader.styles";

function StackHeader({ profileImg, bookCount }: IStackHeaderProps) {
  return (
    <S.Container>
      <S.LogoContainer>
        <S.Title>
          <h1>Bookstack</h1>
          <S.IconContainer>
            <InfoIcon />
          </S.IconContainer>
        </S.Title>
        <MeatballsIcon />
      </S.LogoContainer>
      <S.Profile>
        <NumericalData label="CURRENT BOOKS" data={bookCount} />
        <Link href="/profile">
          <Image
            src={profileImg || defaultProfileImage}
            width={70}
            height={70}
            alt="profile image"
          />
        </Link>
      </S.Profile>
    </S.Container>
  );
}

export default StackHeader;
