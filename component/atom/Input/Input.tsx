import { useState } from "react";
import { IInputProps } from "type";
import * as S from "./Input.styles";

function Input({
  type,
  value,
  onChange,
  width,
  fontSize,
  label,
  placeholder,
}: IInputProps) {
  const [isFocus, setFocus] = useState(false);

  // Input Focus, Blur에 따른 Bottom Line 스타일 변경
  const onInputFocus = () => setFocus(true);
  const onInputBlur = () => setFocus(false);

  return (
    <S.Container>
      {type === "label" && (
        <S.Label fontSize={fontSize} isFocus={isFocus}>
          {label || ""}
        </S.Label>
      )}
      <S.Input
        value={value}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        onChange={(e) => onChange(e.target.value)}
        width={width}
        fontSize={fontSize}
        placeholder={placeholder}
      />
      <S.Line isFocus={isFocus} />
    </S.Container>
  );
}

export default Input;
