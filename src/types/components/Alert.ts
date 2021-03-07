export type AlertKind = "info" | "success" | "error";

export interface AlertWrapperProps {
  kind: AlertKind;
}

export interface AlertProps {
  /**
   * The type of alert. Can be "info", "success" or "error".
   */
  kind?: AlertKind;

  children: JSX.Element;
}
