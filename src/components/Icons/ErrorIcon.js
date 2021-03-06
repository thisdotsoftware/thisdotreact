import React from "react";
import PropTypes from "prop-types";

export const InfoIcon = ({
  width = 24,
  height = 24,
  color = "primary-main",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    css={`
      fill: var(--color-${color});
    `}
    {...props}
  >
    <path d="M12 11C12.55 11 13 11.45 13 12V16C13 16.55 12.55 17 12 17C11.45 17 11 16.55 11 16V12C11 11.45 11.45 11 12 11ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 9H11V7H13V9Z" />
  </svg>
);

InfoIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
