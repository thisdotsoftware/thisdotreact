import React from "react";
import { render, screen } from "../../utils/renderer";
import ChevronIcon from "./ChevronIcon";

test("should show the left arrow", () => {
  render(<ChevronIcon dir="left" />);

  expect(screen.queryByTestId("chevron-left")).toBeInTheDocument();
  expect(screen.queryByTestId("chevron-right")).not.toBeInTheDocument();
});

test("should show the right arrow", () => {
  render(<ChevronIcon dir="right" />);

  expect(screen.queryByTestId("chevron-left")).not.toBeInTheDocument();
  expect(screen.queryByTestId("chevron-right")).toBeInTheDocument();
});
