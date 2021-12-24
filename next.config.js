module.exports = [{
  entry: './src/style/style.scss',
  output: {
     // This is necessary for webpack to compile
     // But we never use style-bundle.js
     filename: 'style-bundle.js'
  },
  module: {
     rules: [{
        test: /\.css$/,
        use: [{
              loader: 'file-loader',
              options: {
                 name: 'bundle.css'
              }
           },
           'extract-loader',
           'css-loader',
        ]
     }]
  }
},
{
  entry: './src/app.js',
  output: {
     filename: 'bundle.js'
  },
  module: {
     rules: [{
        test: /\.js$/,
        use: 'babel-loader'
     }]
  }
}
];