import { IStackProps, IData } from "./molecule.d";

export interface IStackHeaderProps {
  profileImg: string;
  bookCount: number;
  pageCount: number;
  stackType: "stack" | "shelf";
  handleStackType: (v: "stack" | "shelf") => void;
}

export interface IStackListProps {
  stackType: "stack" | "shelf";
  stackData: {
    month: string;
    stackList: IStackProps[];
  }[];
  onStackClick: (id: string) => void;
}

export interface IQuoteStackProps {
  data: IData;
  handleData: (data: IData) => void;
}
