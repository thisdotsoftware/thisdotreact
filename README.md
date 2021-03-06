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

Create or edit an `.npmrc` file in the same directory as your `package.json`
to reconcile `@thisdotsoftware` packages with GitHub Packages:

```
@thisdotsoftware:registry=https://npm.pkg.github.com/
```

Now you'll be able to install the package:

```sh
yarn add @thisdotsoftware/react
```

## Using

Our components are all documented individually in [Storybook], so head over
there for a full list of our components and how to use them. Here's a quick
example using our Alert component:

```js
import { Alert } from "@thisdotsoftware/react";

const YourReactApp = () => <Alert kind="success">Hello, world!</Alert>;
```

We expose the library in two formats: CommonJS and ESM. Modern bundlers will
use ESM by default, so you'll need to make sure your bundler knows how to parse
JSX.

For example, if using webpack and babel you'll need to make sure your project
has a `babel.config.js` file (not `.babelrc`!) and your webpack config runs
any `@thisdotsoftware` files through the `babel-loader:

```js
// webpack will exclude node_modules by default
{ test: /\.js$/, use: "babel-loader" }

// so you need to add a new line specifically for @thisdotsoftware
{ test: /\.js$/, use: "babel-loader", include: [/@thisdotsoftware/] }
```

We also recommend looking at tree shaking for your bundler, so you aren't
shipping the components that you aren't using.

[cheapskate]: https://cheapskate.io
[this.software]: https://this.software
[storybook]: https://thisdotreact.web.app
