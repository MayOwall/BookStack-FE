import * as S from "./Button.styles";

interface IButtonProps {
  buttonType: "smallFill" | "smallLine" | "largeFill" | "largeLine";
  children: string;
  width?: string;
  onClick: () => void;
}
function Button({ buttonType, children, width, onClick }: IButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick();
  };
  return (
    <S.Container
      width={width || "fit-content"}
      style={S.ButtonStyle[buttonType]}
      onClick={handleClick}
    >
      {children}
    </S.Container>
  );
}

export default Button;
