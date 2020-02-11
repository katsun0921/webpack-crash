const path = require('path');
const outputPath = path.resolve(__dirname, "dist")
console.log(outputPath)

module.exports = {
  entry: './src/index.js',
  output: {
    path: outputPath,
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: 'url-loader',
        options: {
          limit: 2048,
          name: './images/[name].[ext]'
        }
      }
    ]
  },
  devServer: {
    contentBase: outputPath
  }
}
