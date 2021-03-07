# Contributing to this.react

While this is an open source project, and we welcome contributions, ultimately
we implement the this.software design system and any changes to this.react need
to adhere to the design system. If there's a component you think we're missing,
feel free to raise an issue (you never know, it may already exist in the design
system and we haven't gotten to implementing it in React yet).

## Commits

You can run `yarn cz` instead of `git commit` to get an interactive prompt for
creating commit messages.

- We use [Angular's commit guidelines] for our commit messages.
- We use [validate-commit-message] to enforce it. Start your commit with `WIP`
  to skip validation (you should squash/rebase these commits before merging).

[angular's commit guidelines]: https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines
[validate-commit-message]: https://github.com/conventional-changelog-archived-repos/validate-commit-msg

## Test IDs

All components should let developers set a custom test ID. This allows
developers to uniquely identify multiple instances of the same component in
their tests.

```tsx
import { DealCard } from "@thisdotsoftware/react";

const App = (): JSX.Element => (
  <>
    <DealCard data-testid="deal-123" />
    <DealCard data-testid="deal-456" />
  </>
);
```

Then, when writing tests, developers can dive deeper into the component by
prefixing their selectors with their own test ID:

```tsx
// cypress - clicking a button in the "123" deal card
cy.get('[data-testid="deal-123"] button').click();

// react testing library - clicking a button in the "456" deal card
fireEvent.click(screen.getByTestId('[data-testid="deal-456"] button'));
```
