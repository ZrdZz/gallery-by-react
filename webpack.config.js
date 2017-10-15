const webpack = require('webpack');

module.exports = {
  entry: __dirname + "/src/index.js",

  output: {
  	path: __dirname + "/src/build",
  	filename: "bundle.js"
  },

  devtool: "eval-source-map",

  devServer: {
  	contentBase: "./src/build",
  	historyApiFallback: true,
  	inline: true,
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }

        ]
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'images/[name].[ext]' 
          }
        }
      }
    ]
  },

  plugins: [new webpack.HotModuleReplacementPlugin()]
}