import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';

export default {
  entry: path.join(__dirname, '/src', 'index.tsx'),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js',
    clean: true,
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  resolve: {
    modules: [
      'src/shared',
      'node_modules',
    ],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.png/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new Dotenv(),
  ],
};
