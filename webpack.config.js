const path = require("path");

module.exports = {
  entry: "./js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.(s)css/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
