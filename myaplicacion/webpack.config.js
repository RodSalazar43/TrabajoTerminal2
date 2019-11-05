const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require('path');
module.exports = {
  module  : {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },{
        test: /\.css$/,
        loader: "style-loader!css-loader",
        include: path.join(__dirname,'src'),
      },{
        test:/\.(png|jpg)$/,
        loader:'file-loader',
        include: path.join(__dirname,'src')
      }
    ]
  },resolve: {
    extensions: ['*', '.js', '.jsx', '.css'],     
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};