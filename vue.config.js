const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, 'node_modules'), './node_modules']
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias.delete('@')
    config.resolve.alias.set('v~', path.resolve(__dirname, 'src'))
  }
}
