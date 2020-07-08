/**
 * Vue Element
 * @library
 */
// Lib imports
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import './element-variables.scss'

export default {
  install(Vue) {
    Vue.use(Element, { locale })
  }
}
