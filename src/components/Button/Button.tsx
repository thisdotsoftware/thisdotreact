import * as React from "react";
import * as Styled from "./Button.styles";

import type { ButtonProps } from "../../types/components/Button";

/**
 * Allows the user to perform an action.
 */
export const Button = ({ children, ...props }: ButtonProps): JSX.Element => (
  <Styled.Button {...props}>{children}</Styled.Button>
);
