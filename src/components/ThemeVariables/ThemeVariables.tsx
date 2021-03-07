import { createGlobalStyle } from "styled-components";

/**
 * Adds the required CSS variables and a few default pieces of CSS to the page.
 */
export const ThemeVariables = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    min-height: 100%;
  }

  body {
    font-family: var(--font-family);
    -webkit-font-smoothing: antialiased;
    background-color: var(--color-white);
    color: var(--color-grey-400);
  }

  p {
    color: inherit;
  }

  :root {
    --font-family: "Nunito Sans", sans-serif;

    --color-primary-main: #4d298e;
    --color-primary-100: #f1ebfe;
    --color-primary-200: #9a74e7;
    --color-primary-300: #341d63;
    --color-primary-400: #2b1a4d;

    --color-yellow-main: #d68800;
    --color-yellow-100: #fffaeb;
    --color-yellow-200: #ffd452;

    --color-blue-main: #146acc;
    --color-blue-100: #ebf4ff;
    --color-blue-200: #57a3fa;
    --color-blue-300: #054c9e;

    --color-green-main: #218262;
    --color-green-100: #ebfff9;
    --color-green-200: #71e0bb;
    --color-green-300: #085e42;

    --color-red-main: #cd370a;
    --color-red-100: #ffeeeb;
    --color-red-200: #eb4d0a;
    --color-red-300: #8a2d04;

    --color-grey-main: #6e6c84;
    --color-grey-100: #f3f2f7;
    --color-grey-200: #dedde3;
    --color-grey-300: #9a98ae;
    --color-grey-400: #34343d;

    --color-black: #000000;
    --color-white: #ffffff;

    --font-weight-normal: 400;
    --font-weight-bold: 700;

    --font-size-heading-1: 2.5rem;
    --font-size-heading-2: 2rem;
    --font-size-heading-3: 1.5rem;
    --font-size-heading-4: 1.25rem;
    --font-size-heading-5: 1rem;
    --line-height-heading-1: 3rem;
    --line-height-heading-2: 2.5rem;
    --line-height-heading-3: 2rem;
    --line-height-heading-4: 1.5rem;
    --line-height-heading-5: 1.375rem;

    --font-size-body-16: 1rem;
    --font-size-body-14: 0.875rem;
    --font-size-body-small: 0.75rem;
    --line-height-body-16: 1.5rem;
    --line-height-body-14: 1.25rem;
    --line-height-body-small: 1.125rem;

    --border-radius: 4px;
    --border-radius-panel: 8px;
    --border-radius-input: 20px;
  }

  a,
  a:visited {
    color: var(--color-primary-main);
    font-weight: var(--font-weight-bold);
    text-decoration: none;
  }

  a:hover {
    color: var(--color-primary-300);
  }
`;
