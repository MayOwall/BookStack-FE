import * as S from "./RoundButton.styles";

interface IRoundButtonProps {
  type: "fill" | "dash" | "line" | "gray";
  onClick: () => void;
  children: string;
}

export default function RoundButton({
  type,
  onClick,
  children,
}: IRoundButtonProps) {
  return (
    <S.Button type={type} onClick={onClick}>
      {children}
    </S.Button>
  );
}
