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

type IData = {
  date: string;
  quoteList: {
    page: number;
    quote: string;
  }[];
}[];
export interface IQuoteStackProps {
  data: IData;
  handleData: (data: IData) => void;
}
