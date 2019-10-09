const path = require('path')

module.exports = {
   outputDir: path.resolve(__dirname, '../public'),
   productionSourceMap: false,
   devServer: {
      host: 'localhost',
      port: 8080,
      proxy: 'http://localhost:3000',
   },
   configureWebpack: {
      module: {
         rules: [{
            test: /\.(pdf)(\?.*)?$/,
            use: [{
               loader: 'url-loader',
               options: {
                  name: 'files/[name].[hash:8].[ext]'
               }
            }]
         }]
      }
   }
}