const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TampermonkeyPlugin = require("./src/tamperMonkeyPlugin");
module.exports = (env, argv) => {
  let config = {
    mode: process.env.NODE_ENV || "production",
    devtool: process.env.NODE_ENV == "production" ? false : "source-map",
    output: {
      filename: "[name].bundle.js",
      path: __dirname + "/dist",
    },
    plugins: [new TampermonkeyPlugin()],
    devServer: {
      host: "localhost",
      port: 8080,
      hot: false,
      client: {
        reconnect: false,
      },
    },
  };
  if (argv.mode === "development") {
    config.devtool = "source-map";
    config.plugins.push(new HtmlWebpackPlugin());
  }

  if (argv.mode === "production") {
    config.devtool = false;
  }
  return config;
};
