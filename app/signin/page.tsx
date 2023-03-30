"use client";
import { useState } from "react";
import { SigninTemplate } from "component";

// Input values 초기값들
const initValues = {
  id: "",
  pw: "",
};

export default function SigninPage() {
  const [values, setValues] = useState(initValues);

  // 변경된 input 값 state화

  const onChange = (type: string, value: string) => {
    const nextValues = {
      ...values,
      [type]: value,
    };
    setValues(() => nextValues);
  };

  // submit button 클릭
  const onSubmit = () => alert(JSON.stringify(values));

  return (
    <SigninTemplate
      inputValues={values}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}
