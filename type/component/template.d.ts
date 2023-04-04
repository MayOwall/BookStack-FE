import { IStackHeaderProps } from "./organsim";

interface IValueProps {
  value: string;
  isAlert: boolean;
}

interface ISignupTemplateProps {
  inputValues: {
    id: IValueProps;
    pw: IValueProps;
    pwConfirm: IValueProps;
    nickname: IValueProps;
  };
  onChange: (
    type: "id" | "pw" | "pwConfirm" | "nickname",
    value: string
  ) => void;
  onSubmit: () => void;
}

interface ISigninTemplateProps {
  inputValues: {
    id: IValueProps;
    pw: IValueProps;
  };
  onChange: (type: "id" | "pw", value: string) => void;
  onSubmit: () => void;
}

interface IStackTemplateProps {
  headerData: {
    img: string;
    bookCount: number;
    pageCount: number;
    stackType: "shelf" | "stack";
  };
  handleStackType: (v: "stack" | "shelf") => void;
}

export type { ISignupTemplateProps, ISigninTemplateProps, IStackTemplateProps };
