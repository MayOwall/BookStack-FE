interface defaultProps {
  onChange: (
    type: "id" | "pw" | "pwConfirm" | "nickname",
    value: string
  ) => void;
  onSubmit: () => void;
}
interface ISignupTemplateProps extends defaultProps {
  inputValues: {
    id: { value: string; isAlert: boolean };
    pw: { value: string; isAlert: boolean };
    pwConfirm: { value: string; isAlert: boolean };
    nickname: { value: string; isAlert: boolean };
  };
}

interface ISigninTemplateProps extends defaultProps {
  inputValues: {
    id: string;
    pw: string;
  };
}
export type { ISignupTemplateProps, ISigninTemplateProps };
