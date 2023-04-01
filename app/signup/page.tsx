"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SignupTemplate } from "component";
import { postSignup } from "api";

// inputValues 초기값들
const initValue = {
  id: { value: "", isAlert: false },
  pw: { value: "", isAlert: false },
  pwConfirm: { value: "", isAlert: false },
  nickname: { value: "", isAlert: false },
};

export default function SignupPage() {
  const router = useRouter();
  const [values, setValues] = useState(initValue);

  // input alert 관리 함수
  const setAlert = (type: "id" | "pw" | "pwConfirm" | "nickname" | "all") => {
    const nextValues = {
      id: { value: values.id.value, isAlert: false },
      pw: { value: values.pw.value, isAlert: false },
      pwConfirm: { value: values.pwConfirm.value, isAlert: false },
      nickname: { value: values.nickname.value, isAlert: false },
    };
    // type이 all일 때
    if (type === "all") {
      setValues(() => nextValues);
      return;
    }

    // type이 all 외의 나머지일 때
    nextValues[type].isAlert = true;
    setValues(() => nextValues);
  };

  // 변경된 input 값 state 관리 함수
  const onChange = (
    type: "id" | "pw" | "pwConfirm" | "nickname",
    value: string
  ) => {
    const nextData = {
      ...values[type],
      value,
    };
    const nextValues = {
      ...values,
      [type]: nextData,
    };
    setValues(() => nextValues);
  };

  // 서버로 데이터를 보내는 것을 관리하는 함수
  const onSubmit = async () => {
    const { id, pw, pwConfirm, nickname } = values;

    // 아이디가 4글자 이상 10글자 이하인지 확인
    if (id.value.length < 4 || id.value.length > 10) {
      setAlert("id");
      return;
    }

    // 비밀번호가 8글자 이상 15글자 이하인지 확인
    if (pw.value.length < 8 || pw.value.length > 15) {
      setAlert("pw");
      return;
    }

    // 두 비밀번호가 같은지 확인
    if (pw.value !== pwConfirm.value) {
      setAlert("pwConfirm");
      return;
    }

    // 닉네임이 2글자 이상 8글자 이하인지 확인
    if (nickname.value.length < 2 || nickname.value.length > 8) {
      setAlert("nickname");
      return;
    }

    // 모든 조건을 통과하면 데이터를 서버로 전송
    const nextData = {
      _id: id.value,
      pw: pw.value,
      nickname: nickname.value,
    };
    const res = await postSignup(nextData);

    // 전송 결과가 already exist면 이미 존재하는 아이디 && id alert 활성화
    if (res.result === "already exist") {
      alert("이미 존재하는 아이디입니다.");
      setAlert("id");
      return;
    }

    // 전송 결과가 error이면 서버 에러라고 표기
    if (res.result === "error") {
      alert("서버에서의 에러가 발생하였습니다.");
      return;
    }

    // 전송 결과가 success면 회원가입 성공
    alert("회원가입 성공. 다시 로그인 해 주세요");
    router.push("/signin");
  };

  return (
    <SignupTemplate
      inputValues={values}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}
