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

export interface ELabelProps extends EInputProps, ELineProps {}

export interface EInputProps {
  width?: string;
  fontSize?: string;
}

export interface ELineProps {
  isFocus: boolean;
}

export interface EAlertProps {
  isAlert: boolean;
}

export interface IInputProps extends EInputProps, EAlertProps {
  type: "label" | "default";
  value: string;
  placeholder: string;
  alert: string;
  onChange: (v: string) => void;
  label?: string;
}

export interface INumericalDataProps {
  label: string;
  data: number;
}
