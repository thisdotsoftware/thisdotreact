import * as React from "react";
import styled, { css } from "styled-components";

import {
  ScreenReaderProps,
  ScreenReaderHiddenProps,
} from "../../types/components/ScreenReader";

const Hidden = styled.div<ScreenReaderHiddenProps>`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;

  ${(props) =>
    props.showOnFocus &&
    css`
      :focus,
      :active {
        position: static;
        width: auto;
        height: auto;
      }
    `}
`;

export const ScreenReader = ({
  as,
  showOnFocus = false,
  children,
  ...props
}: ScreenReaderProps): JSX.Element => (
  <Hidden as={as} showOnFocus={showOnFocus} {...props}>
    {children}
  </Hidden>
);
