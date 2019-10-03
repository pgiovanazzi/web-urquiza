const path = require('path')

module.exports = {
   outputDir: path.resolve(__dirname, '../public'),
   devServer: {
      host: 'localhost', 
      port: 8080,
      proxy: 'http://localhost:3000',
   },
   productionSourceMap: false
}