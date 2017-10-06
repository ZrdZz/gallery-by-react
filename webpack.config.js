module.exports = {
  entry: 

  output: {
  	path: __dirname + "/src/build",
  	filename: "bundle.js"
  },

  devtool: "eval-source-map",

  devServer: {
  	contentBase: "./build",
  	historyApiFallback: true,
  	inline: true
  }
}