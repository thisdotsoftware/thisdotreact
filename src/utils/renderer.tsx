import React, { ComponentType, ReactElement, ReactNode } from "react";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

interface Options extends RenderOptions {
  /**
   * Passed to `MemoryRouter` from `react-router-dom`. Defaults to `["/"]`.
   */
  initialEntries?: string[];

  /**
   * Passed to `MemoryRouter` from `react-router-dom`. Defaults to `0`.
   */
  initialIndex?: number;
}

/**
 * Wrapper for the render function from `@testing-library/react`, that
 * automatically wraps components in our most commonly used context providers
 * (e.g. react-redux, react-router, styled-components).
 *
 * Use the `options` parameter to override the defaults for these providers.
 */
function render(
  ui: ReactElement,
  options: Options
): ReturnType<typeof rtlRender> {
  const {
    initialEntries = ["/"],
    initialIndex = 0,
    ...renderOptions
  } = options;

  const Wrapper: ComponentType = ({ children }) => {
    return (
      <MemoryRouter initialEntries={initialEntries} initialIndex={initialIndex}>
        {children}
      </MemoryRouter>
    );
  };

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
