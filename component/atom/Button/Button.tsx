import * as S from "./Button.styles";

interface IButtonProps {
  buttonType: "smallFill" | "smallLine" | "largeFill" | "largeLine";
  children: string;
  width?: string;
  onClick: (e: React.MouseEvent) => void;
}
function Button({ buttonType, children, width, onClick }: IButtonProps) {
  return (
    <S.Container
      width={width || "fit-content"}
      style={S.ButtonStyle[buttonType]}
      onClick={onClick}
    >
      {children}
    </S.Container>
  );
}

export default Button;
