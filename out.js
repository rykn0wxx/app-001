const fs = require('fs')
const path = require('path')
const strip = require('strip-comments')
const pluginsFile = path.resolve(__dirname, 'src/plugins/vue-material/line-ripple/_mixins.scss')
const all = fs.readFileSync(pluginsFile, 'utf8')

const runStrip = () => console.log(strip(all))
runStrip()
