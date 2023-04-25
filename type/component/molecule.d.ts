export interface IStackProps {
  _id: string;
  no: number;
  title: string;
  author: string;
  date: string;
  bookImage: string;
}

export interface IMonthlyStackProps {
  month: string;
  stackType: "stack" | "shelf";
  stackList: IStackProps[];
  onStackClick: (id: string) => void;
}

export interface QuoteCardData {
  _id: string;
  date: string;
  quote: string;
  page: number;
  note: string;
}

export interface IQuoteCardProps {
  data: QuoteCardData;
  handleMeatball: (quoteCardId: string) => void;
}

export interface IQuoteCreateCardProps {
  handlePush: (newQuoteData: QuoteCardData) => void;
  handleCancel: () => void;
}
