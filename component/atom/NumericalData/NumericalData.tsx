import { addComma } from "hooks";
import { INumericalDataProps } from "type";
import * as S from "./NumericalData.styles";

function NumericalData({ label, data }: INumericalDataProps) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Data>{addComma(data)}</S.Data>
    </S.Container>
  );
}

export default NumericalData;
