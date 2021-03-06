import { ReactNode } from "react";

export type ButtonProps = Omit<JSX.IntrinsicElements["button"], "ref"> & {
  children: ReactNode;
  narrow?: boolean;
};
