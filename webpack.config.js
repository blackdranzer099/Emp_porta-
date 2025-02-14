module.exports = {
  devtool: "source-map", // Enable source maps for your code
  module: {
    rules: [
      {
        test: /\.m?js$/,
        enforce: "pre",
        use: ["source-map-loader"],
        exclude: /node_modules/, // Exclude all node_modules
      },
    ],
  },
};