import React from "react";
import { render, screen, fireEvent } from "../../utils/renderer";

import Header from "./Header";

it("should display the homepage name", () => {
  render(<Header />, { initialEntries: ["/"] });
  expect(screen.getByText("Dashboard")).toBeTruthy();
});

it("should display the price drop page name", () => {
  render(<Header />, { initialEntries: ["/price-drop"] });
  expect(screen.getByText("Price drop manager")).toBeTruthy();
});

it("should display the style guide page name", () => {
  render(<Header />, { initialEntries: ["/style"] });
  expect(screen.getByText("Style guide")).toBeTruthy();
});

it("should navigate back to the homepage", async () => {
  render(<Header />, {
    initialEntries: ["/price-drop"],
  });

  expect(screen.queryByText("Dashboard")).not.toBeInTheDocument();
  expect(screen.queryByText("Price drop manager")).toBeInTheDocument();

  await fireEvent.click(screen.getByTestId("logo"));

  expect(screen.queryByText("Price drop manager")).not.toBeInTheDocument();
  expect(screen.queryByText("Dashboard")).toBeInTheDocument();
});
