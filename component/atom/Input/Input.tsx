"use client";
import { useState } from "react";
import { IInputProps } from "type";
import * as S from "./Input.styles";

function Input({
  type,
  value,
  placeholder,
  alertLabel,
  isAlert,
  label,
  maxLength,
  onChange,
}: IInputProps) {
  const [isFocus, setFocus] = useState(false);

  // Input Focus, Blur에 따른 Bottom Line 스타일 변경
  const onInputFocus = () => setFocus(true);
  const onInputBlur = () => setFocus(false);

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input
        type={type === "password" ? "password" : "text"}
        value={value}
        placeholder={placeholder}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        maxLength={maxLength ? maxLength : 300}
      />
      <S.Line isFocus={isFocus} />
      <S.Alert isAlert={isAlert}>{alertLabel}</S.Alert>
    </S.Container>
  );
}

export default Input;
