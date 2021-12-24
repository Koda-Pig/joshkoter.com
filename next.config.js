module.exports = {
  reactStrictMode: true,
}

const withVideos = require('next-videos')

module.exports = withVideos()

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};