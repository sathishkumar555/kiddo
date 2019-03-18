const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const ROOT_PATH = path.resolve(__dirname);

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});

module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: [
            {
                loader: "style-loader"
              },
              {
                loader: "css-loader"
                // options: {
                //   modules: true,
                //   importLoaders: 1,
                //   localIdentName: "[name]_[local]_[hash:base64]",
                //   sourceMap: true,
                //   minimize: true
                // }
              }
          ]

        },
        {
          test: /\.s[c|a]ss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          include: [path.resolve(ROOT_PATH, 'src/css')]
      },
]
    },
    devtool:'cheap-module-eval-source-map',
    plugins: [htmlPlugin]
  };