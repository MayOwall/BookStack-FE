export interface IStackProps {
  id: string;
  no: number;
  title: string;
  author: string;
  date: string;
  img?: string;
}

export interface IMonthlyStackProps {
  month: string;
  stackType: "stack" | "shelf";
  stackList: IStackProps[];
  onStackClick: (id: string) => void;
}
