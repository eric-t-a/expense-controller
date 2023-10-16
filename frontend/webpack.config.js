const path = require('path');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const options = {};

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  plugins: [
    new WebpackManifestPlugin(options)
  ],
  output: {
    filename: '[name].[contenthash].js',
    path:path.resolve(__dirname, "public/js"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
                '@babel/preset-env', 
                ['@babel/preset-react', {"runtime": "automatic"}]
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]
  },
  mode: "production"
}