/* eslint-env node */

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  devtool: "hidden-source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "thisdotreact.min.js",
    library: "thisdotreact",
    libraryTarget: "umd",
  },
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }],
  },
  plugins: [new CleanWebpackPlugin()],
  externals: [
    "prop-types",
    "react",
    "react-router",
    "react-router-dom",
    "styled-components",
  ],
};

module.exports = config;
