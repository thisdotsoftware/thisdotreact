import React from "react";
import PropTypes from "prop-types";

import * as Styled from "./Button.styles";

/**
 * Allows the user to perform an action.
 */
export const Button = ({ children, ...props }) => (
  <Styled.Button {...props}>{children}</Styled.Button>
);

Button.propTypes = {
  /** The button's text content. */
  children: PropTypes.node.isRequired,

  /** All other props are passed to the underlying `<button>` element. */
  "...rest": PropTypes.any,
};
