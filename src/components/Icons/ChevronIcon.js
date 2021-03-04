import React from "react";

const ChevronIcon = ({
  dir = "left",
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
    {dir === "left" && (
      <path
        data-testid="chevron-left"
        d="M14.71 6.71C14.32 6.32 13.69 6.32 13.3 6.71L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.1 16.91 15.1 16.28 14.71 15.89L10.83 12L14.71 8.12C15.1 7.73 15.09 7.09 14.71 6.71Z"
      />
    )}

    {dir === "right" && (
      <path
        data-testid="chevron-right"
        d="M9.29006 6.71001C8.90006 7.10001 8.90006 7.73001 9.29006 8.12001L13.1701 12L9.29006 15.88C8.90006 16.27 8.90006 16.9 9.29006 17.29C9.68006 17.68 10.3101 17.68 10.7001 17.29L15.2901 12.7C15.6801 12.31 15.6801 11.68 15.2901 11.29L10.7001 6.70001C10.3201 6.32001 9.68006 6.32001 9.29006 6.71001Z"
      />
    )}
  </svg>
);

export default ChevronIcon;
