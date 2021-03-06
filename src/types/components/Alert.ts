export type AlertKind = "info" | "success" | "error";

export interface AlertWrapperProps {
  kind: AlertKind;
}

export interface AlertProps {
  kind?: AlertKind;
  children: JSX.Element;
}
