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

export interface EInputProps {
  width?: string;
  fontSize?: string;
}

export interface ELineProps {
  isFocus: boolean;
}

export interface IInputProps extends EInputProps {
  type: "label" | "default";
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label?: string;
}
