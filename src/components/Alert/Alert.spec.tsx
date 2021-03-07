import * as React from "react";
import { Alert } from "./Alert";

import { render, screen } from "../../utils/renderer";

test("it should default to the info alert", () => {
  render(<Alert>This is the default alert</Alert>);

  expect(screen.getByText("This is the default alert")).toBeInTheDocument();
  expect(screen.getByTestId("alert-info-icon")).toBeInTheDocument();
});

test("it should show the info alert", () => {
  render(<Alert kind="info">This is the info alert</Alert>);

  expect(screen.getByText("This is the info alert")).toBeInTheDocument();
  expect(screen.getByTestId("alert-info-icon")).toBeInTheDocument();
});

test("it should show the success alert", () => {
  render(<Alert kind="success">This is the success alert</Alert>);

  expect(screen.getByText("This is the success alert")).toBeInTheDocument();
  expect(screen.getByTestId("alert-success-icon")).toBeInTheDocument();
});

test("it should show the error alert", () => {
  render(<Alert kind="error">This is the error alert</Alert>);

  expect(screen.getByText("This is the error alert")).toBeInTheDocument();
  expect(screen.getByTestId("alert-error-icon")).toBeInTheDocument();
});
