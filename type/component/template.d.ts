interface defaultProps {
  onChange: (type: string, value: string) => void;
  onSubmit: () => void;
}
interface ISignupTemplateProps extends defaultProps {
  inputValues: {
    id: string;
    pw: string;
    pwConfirm: string;
    nickname: string;
  };
}

interface ISigninTemplateProps extends defaultProps {
  inputValues: {
    id: string;
    pw: string;
  };
}
export type { ISignupTemplateProps, ISigninTemplateProps };
