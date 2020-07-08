import TopBar from './TopBar.vue'
import initPlugin from './initPlugin'

const plugin = {
  install(vm) {
    vm.component('top-app-bar', TopBar)
  }
}

export default plugin

initPlugin(plugin)
