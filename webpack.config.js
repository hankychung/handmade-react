const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  devServer: {
    contentBase: "/dist",
    host: "localhost",
    port: 1111
  },
  plugins: [
    new HtmlPlugin({
      template: "./src/index.html"
    })
  ],
  module: {
    rules: [{ test: /jsx?$/, use: "babel-loader" }]
  }
};
