export interface IStackHeaderProps {
  img: string;
  bookCount: number;
  pageCount: number;
  stackType: "stack" | "shelf";
  handleStackType: (v: "stack" | "shelf") => void;
}
