import * as S from "./Button.styles";

interface IButtonProps {
  width: "fill" | "hug";
  buttonType: "disabled" | "fill" | "vacant" | "alert";
  onClick: () => void;
  children: string;
}

function Button({ width, buttonType, children, onClick }: IButtonProps) {
  return (
    <S.Button width={width} buttonType={buttonType} onClick={onClick}>
      <small>{children}</small>
    </S.Button>
  );
}

export default Button;
