interface ISignupTemplateProps {
  inputValues: {
    id: string;
    pw: string;
    pwConfirm: string;
    nickname: string;
  };
  onChange: (type: string, value: string) => void;
  onSubmit: () => void;
}

export type { ISignupTemplateProps };
