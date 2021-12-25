module.exports = {
   reactStrictMode: true,
   module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
 }
 
 const withVideos = require('next-videos')
 
 module.exports = withVideos()