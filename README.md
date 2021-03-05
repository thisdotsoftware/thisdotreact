<h1>this.react</h1>

<p>
  <img src="https://img.shields.io/badge/-GitHub%20packages-blue" alt="hosted on GitHub Packages" />

  <a href="https://thisdotreact.web.app">
    <img src="https://img.shields.io/badge/-Storybook-blue" alt="documented using Storybook" />
  </a>
</p>

this.react is a React component library created by [this.software] to power the
customer and colleague web experiences across all of our brands, including
[Cheapskate] and [this.software].

- [Installing](#installing)
- [Using](#using)

## Installing

You must be a member of our [GitHub organisation], have a [personal access token]
with the `read:packages` scope, and have an `.npmrc` file in your project that
is setup for the GitHub package registry. See the [GitHub packages guide] for
full instructions.

Run the install command.

```sh
yarn add @thisdotsoftware/react
```

## Using

Our components are all documented individually in [Storybook], so head over
there for a full list of our components and how to use them. Here's a quick
example using our Alert component:

```js
import { Alert } from "@thisdotsoftware/react";

const YourReactComponent = () => <Alert kind="info">Hello, world!</Alert>;
```

We expose the library in two formats: CommonJS and ESM. Modern bundlers will
use ESM by default, so you'll need to make sure your bundler knows how to parse
JSX.

For example, if using webpack and babel you'll need to make sure your project
has a `babel.config.js` file (not `.babelrc`!) and your webpack config runs
any `@thisdotsoftware` files through the `babel-loader:

```js
{
  test: /\.js$/,
  use: "babel-loader",
},
{
  test: /\.js$/,
  include: [/@thisdotsoftware/],
  use: "babel-loader",
},
```

We also recommend looking at tree shaking for your bundler, so you aren't
bundling any components that you aren't using.

[cheapskate]: https://cheapskate.io
[this.software]: https://this.software
[storybook]: https://thisdotreact.web.app
[github organisation]: https://github.com/thisdotsoftware
[github packages guide]: https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages#installing-a-package
[personal access token]: https://docs.github.com/en/packages/learn-github-packages/about-github-packages#authenticating-to-github-packages
