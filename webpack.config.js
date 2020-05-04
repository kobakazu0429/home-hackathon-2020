const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          "style-loader",
          { loader: "css-loader", options: { url: false } }
        ]
      },
      {
        test: /\.(ogg|mp3|woff|woff2|eot|ttf|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/index.html"),
      scriptLoading: "defer"
    }),
    new CopyPlugin([
      { from: path.resolve(__dirname, "fonts"), to: path.resolve(__dirname, "dist") }
    ]),
  ],

  devServer: {
    host: "0.0.0.0",
    port: 5000,
    disableHostCheck: true,
    contentBase: path.resolve(__dirname, "public"),
    watchContentBase: true,
    hot: true,
    open: true,
    historyApiFallback: true,
    overlay: true,
    inline: true
  },
};
