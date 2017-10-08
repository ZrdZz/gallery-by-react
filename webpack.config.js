module.exports = {
  entry: __dirname + "/src/index.js",

  output: {
  	path: __dirname + "/src/build",
  	filename: "bundle.js"
  },

  devtool: "eval-source-map",

  devServer: {
  	contentBase: "./build",
  	historyApiFallback: true,
  	inline: true
  },

  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets:["es2015", "react"]
          }
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
            loader: "css-loader",
            options: {
              modules: true
            }
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
            limit: 8192
          }
        }
      }
    ]
  }
}