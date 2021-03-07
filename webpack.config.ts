/* eslint-env node */

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  devtool: "hidden-source-map",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "cjs"),
    filename: "thisdotreact.min.js",
    library: "thisdotreact",
    libraryTarget: "umd",
  },
  module: {
    rules: [{ test: /\.(ts|tsx|js|jsx)$/, use: "babel-loader" }],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  plugins: [new CleanWebpackPlugin()],
  externals: ["react", "react-router", "react-router-dom", "styled-components"],
};

module.exports = config;
