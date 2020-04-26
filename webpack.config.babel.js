import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      favicon: 'assets/images/favicon.png',
    }),
    new CopyWebpackPlugin([
      {from:'./assets/images',to:'./assets/images'},
      {from: './assets/css', to:'./assets/css'} 
  ]),
  ],
  stats: 'minimal',
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    open: false,
    contentBase: './dist',
    inline: true,
    port: 4000,
  },
};
