const path = require('path')
const nodeExternals = require('webpack-node-externals')

const web = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2', // THIS IS THE MOST IMPORTANT LINE!
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ts$|.tsx$/,
        use: 'ts-loader',
      },
    ],
  },
  externals: {
    react: 'commonjs react', // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
    'react-apollo': 'commonjs react-apollo',
    graphql: 'commonjs graphql',
    'graphql-tag': 'commonjs graphql-tag',
    '@apollo/client': 'commonjs @apllo/client',
  },
}

const node = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.node.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ts$|.tsx$/,
        use: 'ts-loader',
      },
    ],
  },
  externals: [
    nodeExternals(),
    {
      react: 'commonjs react', // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
      'react-apollo': 'commonjs react-apollo',
      graphql: 'commonjs graphql',
      'graphql-tag': 'commonjs graphql-tag',
    },
  ],
}

module.exports = [web, node]
