const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "examples/src/index.js"),
  output: {
    path: path.join(__dirname, "examples/dist"),
    filename: "bundle.js"
  },
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
      },
      {
        test: /\.(svg)$/,
        use: {
            loader: 'file-loader',
            options: {
                name: 'fonts/[hash].[ext]'
            }
        }
    },
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