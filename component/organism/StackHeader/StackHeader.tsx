// import InfoIcon from "public/InfoIcon.svg";
import Image from "next/image";
import { NumericalData } from "component";
import { InfoIcon, StackIcon, ShelfIcon } from "public";
import { IStackHeaderProps } from "type";
import * as S from "./StackHeader.styles";

function StackHeader({ img, bookCount, pageCount }: IStackHeaderProps) {
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
          <Image src={img} fill alt="profile" />
        </S.Profile>
      </S.Upper>
      <S.Bottom>
        <div>
          <NumericalData label="Books" data={bookCount} />
          <NumericalData label="Pages" data={pageCount} />
        </div>
        <div>
          <span>
            <StackIcon />
          </span>
          <span>
            <ShelfIcon />
          </span>
        </div>
      </S.Bottom>
    </S.Container>
  );
}

export default StackHeader;
