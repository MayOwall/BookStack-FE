import { BookInfoData, IStackHeaderProps } from "./organsim";
import { IStackProps } from "./molecule";
import { QuoteCardData } from "./molecule";
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
  handleSubmit: () => void;
}

interface ISigninTemplateProps {
  inputValues: {
    id: IValueProps;
    pw: IValueProps;
  };
  onChange: (type: "id" | "pw", value: string) => void;
  handleSubmit: () => void;
}

interface StackHeaderData {
  profileImg: string;
  bookCount: number;
}

interface IStackTemplateProps {
  headerData: StackHeaderData;
  stackData: { month: string; stackList: IStackProps[] }[];
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
  handleQuoteData: (
    type: "push" | "edit" | "delete",
    data: QuoteCardData
  ) => void;
  quoteCards: JSX.Element;
  handleBookInfoMeatball: () => void;
}

interface IStackCreateTemplateProps {
  bookInfo: {
    no?: number;
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
  handleSubmit: () => void;
}

export type {
  StackHeaderData,
  ISignupTemplateProps,
  ISigninTemplateProps,
  IStackTemplateProps,
  IStackDetailTemplateProps,
  IStackCreateTemplateProps,
};
