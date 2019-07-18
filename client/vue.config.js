const path = require('path')

module.exports = {
   outputDir: path.resolve(__dirname, '../public'),
   devServer: {
      proxy: 'http://localhost:3000'
   },
   productionSourceMap: false
}