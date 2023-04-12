"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SigninTemplate } from "component";
import { postSignin } from "api";

// Input values 초기값들
const initValues = {
  id: { value: "", isAlert: false },
  pw: { value: "", isAlert: false },
};

export default function SigninPage() {
  const [values, setValues] = useState(initValues);
  const router = useRouter();

  // input alert value 핸들러
  const handleAlertValue = (type: "id" | "pw" | "all") => {
    const nextValues = {
      id: { value: values.id.value, isAlert: false },
      pw: { value: values.pw.value, isAlert: false },
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

  // 변경된 input value 핸들러
  const handleInputValue = (type: "id" | "pw", value: string) => {
    const nextData = {
      value,
      isAlert: false,
    };
    const nextValues = {
      ...values,
      [type]: nextData,
    };
    setValues(() => nextValues);
  };

  // submit button 클릭
  const handleSubmit = async () => {
    try {
      const { id, pw } = values;

      // 아이디가 4글자 이상 10글자 이하인지 확인
      if (id.value.length < 4 || id.value.length > 10) {
        handleAlertValue("id");
        return;
      }

      // 비밀번호가 8글자 이상 15글자 이하인지 확인
      if (pw.value.length < 8 || pw.value.length > 15) {
        handleAlertValue("pw");
        return;
      }

      const nextData = {
        _id: id.value,
        pw: pw.value,
      };

      const res = await postSignin(nextData);

      if (res.result === "no id") {
        alert("존재하지 않는 아이디입니다.");
        handleAlertValue("id");
        return;
      }
      if (res.result === "uncorrect pw") {
        alert("비밀번호가 맞지 않습니다.");
        handleAlertValue("pw");
        return;
      }
      if (res.result === "error") {
        alert("서버에서의 에러가 발생했습니다.");
        return;
      }

      const { token } = res;
      localStorage.setItem("token", token);
      alert("성공적으로 로그인 되었습니다.");
      router.push("/stack");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SigninTemplate
      inputValues={values}
      onChange={handleInputValue}
      handleSubmit={handleSubmit}
    />
  );
}
