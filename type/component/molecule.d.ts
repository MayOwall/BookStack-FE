export interface IStackProps {
  _id: string;
  no: number;
  title: string;
  author: string;
  date: string;
  img: string;
}

export interface IMonthlyStackProps {
  month: string;
  stackType: "stack" | "shelf";
  stackList: IStackProps[];
  onStackClick: (id: string) => void;
}

export type IData = {
  date: string;
  quoteList: {
    page: number;
    quote: string;
  }[];
}[];

export interface IQuoteCardProps {
  quote: string;
  page: number;
  handleQuoteDelete: (quote: string) => void;
}

export interface IQuoteCreateCardProps {
  handlePush: (newQuoteData: { quote: string; page: number }) => void;
  handleCancel: () => void;
}
