import React from "react";
import { ThemeVariables } from "../src/components/ThemeVariables/ThemeVariables";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: [
        "Guides",
        ["Getting started", "CSS Variables"],
        "Foundations",
        ["Typography", "Colour"],
        "Atoms",
        // "Element",
        // "Organism",
        "Hooks",
      ],
    },
  },
};

export const decorators = [
  (Story) => (
    <div>
      <ThemeVariables />
      <Story />
    </div>
  ),
];
