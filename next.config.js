module.exports = {
   reactStrictMode: true,
   entry: ["./styles/home.module.css", "./pages/index.js"]
 }
 
 const withVideos = require('next-videos')
 
 module.exports = withVideos()