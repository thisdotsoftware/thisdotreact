export interface ScreenReaderHiddenProps {
  showOnFocus: boolean;
}

export interface ScreenReaderProps {
  as?: React.ElementType;
  showOnFocus?: boolean;
  children: JSX.Element;
}
