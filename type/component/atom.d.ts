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

export interface ELineProps {
  isFocus: boolean;
}

export interface ELabelProps extends EInputProps, ELineProps {}

export interface EAlertProps {
  isAlert: boolean;
}

export interface IInputProps extends EInputProps, EAlertProps {
  type?: "default" | "password";
  label: string;
  alertLabel: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  maxLength?: number;
}

export interface INumericalDataProps {
  label: string;
  data: number;
}
