# this.react

this.react is a React component library created by this.software to power our
customer and colleague experiences, including Cheapskate.

- [Running the project locally](#running-the-project-locally)
- [Unit testing](#unit-testing)
- [Linting and formatting](#linting-and-formatting)
- [Deploying](#deploying)

## Running the project locally

In development mode, install the packages and start the dev server. You can
access the app at `http://localhost:3000`:

```sh
yarn
yarn start
```

In production mode, install the packages, build the files then use a server to
serve them. You can access the app at `http://localhost:8080` (depends on your
server of choice):

```sh
yarn
yarn build

npx http-server ./public
```

Or you can use Docker. You can access the app at `http://localhost:8080`.

```sh
docker build -t cheapskate-tools .
docker run -p 8080:8080 cheapskate-tools
```

## Unit testing

To run the tests in watch mode:

```sh
yarn
yarn test
```

To run the tests without watch mode:

```
sh
yarn test:ci
```

## Linting and formatting

We're using ESLint to detect code problems, and prettier to format code. Highly
recommend you enable your editor's "format on save" option to automatically
run prettier every time you save a file.

```sh
yarn lint
yarn lint --fix
yarn format
```

## Deploying

Pushing to `main` will automatically deploy the app.

If you want to deploy locally, you'll need my firebase credentials, which isn't
going to happen. Or you can deploy to your own firebase!

1. Create a firebase account and create an app
2. Globally install the `firebase-tools` package
3. Run `firebase login`
4. Create a `.firebaserc` file with your project ID:

```json
{
  "projects": {
    "default": "app-95b1e"
  }
}
```
