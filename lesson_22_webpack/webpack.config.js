const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production', // включает оптимизацию и минификацию

  entry: './src/js/main.js', // точка входа JS

  output: {
    filename: 'bundle.js', // итоговый JS
    path: path.resolve(__dirname, 'dist'),
    clean: true, // очистка dist перед сборкой
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // если нужен транспилятор (опционально)
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // обработка SCSS и CSS
        use: [
          MiniCssExtractPlugin.loader, // извлекает CSS в отдельный файл
          'css-loader',                // обрабатывает импорты CSS
          'sass-loader',               // компилирует SCSS в CSS
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css', // итоговый CSS-файл
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html', // шаблон HTML
      inject: 'body',               // подключить скрипты перед </body>
    }),
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),       // минификация JS
      new CssMinimizerPlugin(), // минификация CSS
    ],
  },

  watch: true, // вотчер — пересборка при изменениях

  devtool: 'source-map', // source map для удобной отладки
};
