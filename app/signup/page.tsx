"use client";
import { useState } from "react";
import { SignupTemplate } from "component";
import { postSignup } from "api";

// Input values 초기값들
const initValue = {
  id: "",
  pw: "",
  pwConfirm: "",
  nickname: "",
};

export default function SignupPage() {
  const [values, setValues] = useState(initValue);

  // 변경된 input 값 state화
  const onChange = (type: string, value: string) => {
    const nextValues = {
      ...values,
      [type]: value,
    };
    setValues(() => nextValues);
  };

  // submit button 클릭
  const onSubmit = async () => {
    const res = await postSignup(values);
    console.log("signup response :", res);
  };

  return (
    <SignupTemplate
      inputValues={values}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}
