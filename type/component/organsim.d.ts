import { IStackProps, IQuoteCardData, IQuoteCardProps } from "./molecule.d";

export interface IStackHeaderProps {
  profileImg: string;
  bookCount: number;
}

export interface IStackListProps {
  stackData: {
    month: string;
    stackList: IStackProps[];
  }[];
}

export interface IQuoteStackProps {
  quoteList: QuoteCardData[];
  handleQuoteData: (
    type: "push" | "edit" | "delete",
    data: QuoteCardData
  ) => void;
}

export interface BookInfoData {
  no?: number;
  title: string;
  author: string;
  publisher: string;
  date: string;
  detail: string;
}

export interface IBookInfoProps {
  bookInfo: BookInfoData;
  handleBookInfo: (
    type: "title" | "author" | "publisher" | "date" | "detail",
    v: string
  ) => void;
}
