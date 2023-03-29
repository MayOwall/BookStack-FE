import * as S from "./RoundButton.styles";

interface IRoundButtonProps {
  children: string;
  type: "fill" | "dash" | "line" | "gray";
  onClick: () => void;
}

export default function RoundButton({
  children,
  type,
  onClick,
}: IRoundButtonProps) {
  return (
    <S.Button type={type} onClick={onClick}>
      {children}
    </S.Button>
  );
}
