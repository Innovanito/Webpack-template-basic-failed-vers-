const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  //File start at this point
  entry: './js/main.js',

  //Setting converts output(bundler)
  output: {
    // path: path.resolve(__dirname, 'dist'),
    // file: 'main.js'
    clean:true
  },

  module: {
    rules: [
      {
        test: '/\.s?css$/',
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static'}
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }

}