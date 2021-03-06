type ThemeColor =
  | "primary-main"
  | "primary-100"
  | "primary-200"
  | "primary-300"
  | "primary-400"
  | "yellow-main"
  | "yellow-100"
  | "yellow-200"
  | "blue-main"
  | "blue-100"
  | "blue-200"
  | "blue-300"
  | "green-main"
  | "green-100"
  | "green-200"
  | "green-300"
  | "red-main"
  | "red-100"
  | "red-200"
  | "red-300"
  | "grey-main"
  | "grey-100"
  | "grey-200"
  | "grey-300"
  | "grey-400"
  | "black"
  | "white";

export interface BasicIconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  color?: ThemeColor;
}
