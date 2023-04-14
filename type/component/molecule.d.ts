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
  quoteList: QuoteCardData[];
}[];

export interface QuoteCardData {
  _id: string;
  quote: string;
  page: number;
  note: string;
}

export interface IQuoteCardProps extends QuoteCardData {
  handleQuoteEdit: (_id: string) => void;
}

export interface IQuoteCreateCardProps {
  handlePush: (newQuoteData: { quote: string; page: number, note : string }) => void;
  handleCancel: () => void;
}
