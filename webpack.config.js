const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/main.jsx",
  mode: "development",
  output: {
    publicPath: "auto",
  },
  devServer: {
    port: 3002,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfe2",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
      },
      shared: ["react", "react-dom"],
    }),
  ],
};
