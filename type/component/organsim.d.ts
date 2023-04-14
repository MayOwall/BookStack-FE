import { IStackProps, IData } from "./molecule.d";

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
  quoteData: IData;
  handleQuoteData: (
    type: "push" | "edit" | "delete",
    data: { _id?: string; quote?: string; page?: number }
  ) => void;
}
