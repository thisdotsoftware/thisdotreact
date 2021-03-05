/* eslint-disable no-restricted-imports, react/prop-types */

import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

function render(
  ui,
  { initialEntries = ["/"], initialIndex = 0, ...renderOptions } = {}
) {
  function Wrapper({ children }) {
    return (
      <MemoryRouter initialEntries={initialEntries} initialIndex={initialIndex}>
        {children}
      </MemoryRouter>
    );
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
