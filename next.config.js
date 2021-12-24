const withImages = require("next-images");
const withCSS = require('next-css')
const withVideos = require('next-videos')


module.exports = withCSS(withImages(withVideos( {
  reactStrictMode: true,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  webpack: (config, { isServer }) => {
      if (!isServer) {
          // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
          config.resolve.fallback = {
              fs: false
          }
      }

      return config;
  }
})))