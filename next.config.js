module.exports = {
   reactStrictMode: true,
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
 }
 
 const withVideos = require('next-videos')
 
 module.exports = withVideos()