export interface EButtonProps {
  type: "fill" | "dash" | "line";
  width?: string;
  height?: string;
  fontSize?: string;
  color?: string;
}

export interface IRoundButtonProps extends EButtonProps {
  children: string;
  onClick: () => void;
}
