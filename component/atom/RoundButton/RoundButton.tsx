import { IRoundButtonProps } from "type";
import * as S from "./RoundButton.styles";

export default function RoundButton({
  children,
  type,
  onClick,
  width,
  height,
  fontSize,
  color,
}: IRoundButtonProps) {
  return (
    <S.Button
      type={type}
      onClick={onClick}
      width={width}
      height={height}
      fontSize={fontSize}
      color={color}
    >
      {children}
    </S.Button>
  );
}
