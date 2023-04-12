import { IStackHeaderProps } from "./organsim";
import { IStackProps } from "./molecule";
import { IData } from "./molecule";
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

interface StackHeaderData {
  profileImg: string;
  bookCount: number;
  pageCount: number;
  stackType: "shelf" | "stack";
}
interface IStackTemplateProps {
  headerData: StackHeaderData;
  stackData: { month: string; stackList: IStackProps[] }[];
  handleStackType: (v: "stack" | "shelf") => void;
}

interface IStackDetailTemplateProps {
  bookInfo: {
    no: number;
    title: string;
    author: string;
    publisher: string;
    date: string;
    detail: string;
  };
  handleBookInfo: (type: string, v: string | number) => void;
  quoteData: IData;
  handleQuoteData: (
    type: "push" | "edit" | "delete",
    data: { _id?: string; quote?: string; page?: number }
  ) => void;
  cover: string;
  handleCover: (v: string) => void;
}

interface IStackCreateTemplateProps {
  bookInfo: {
    no: number;
    title: string;
    author: string;
    publisher: string;
    date: string;
    detail: string;
  };
  handleBookInfo: (
    type: "title" | "author" | "publisher" | "date" | "detail",
    v: string
  ) => void;
}

export type {
  StackHeaderData,
  ISignupTemplateProps,
  ISigninTemplateProps,
  IStackTemplateProps,
  IStackDetailTemplateProps,
  IStackCreateTemplateProps,
};
