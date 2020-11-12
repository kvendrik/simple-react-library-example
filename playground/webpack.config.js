const {resolve, join} = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: join(__dirname, 'public'),
    compress: true,
    port: 9000,
  },
  entry: {
    main: { import: './src/index.tsx', dependOn: 'vendors' },
    vendors: ['react', 'react-dom'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: resolve(__dirname, 'src'),
      },
    ],
  },
  output: {
    path: resolve(__dirname, 'public'),
  },
};
