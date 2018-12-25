const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "examples/src/index.js"),
  module: {
    rules: [
        {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      }, 
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "examples/src/index.html"),
      filename: "./index.html"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    port: 3000,
    open: true,
  }
};