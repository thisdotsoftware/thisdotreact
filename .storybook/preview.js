import React from "react";
import { ThemeVariables } from "../src/components/ThemeVariables/ThemeVariables";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: [
        "Introduction",
        "Foundations",
        ["Typography", "Colour"],
        "Guides",
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
