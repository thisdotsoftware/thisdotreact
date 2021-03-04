/* eslint-env node */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const config = {
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "app.js",
    publicPath: "/",
  },
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Cheapskate Tools",
      template: "./src/index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "static", to: "" }],
    }),
  ],
  devServer: {
    port: 3000,
    contentBase: "./static",
    hot: true,
    historyApiFallback: {
      index: "index.html",
    },
  },
};

module.exports = config;
