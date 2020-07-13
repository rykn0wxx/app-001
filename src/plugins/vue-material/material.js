/**
 * Vue Material
 * @library
 */
import btn from './button'
import fab from './fab'
import textfield from './textfield'
import floatingLabel from './floating-label'
import notchedOutline from './notched-outline'
import lineRipple from './line-ripple'
import typography from './typography'
import iconButton from './icon-button'
// import VueMaterialAdapter from 'vue-material-adapter/dist/vue-material-adapter.esm.js'

export default {
  install(Vue) {
    Vue.use(btn)
    Vue.use(fab)
    Vue.use(textfield)
    Vue.use(floatingLabel)
    Vue.use(notchedOutline)
    Vue.use(lineRipple)
    Vue.use(typography)
    Vue.use(iconButton)
  }
}

// Lib imports
// import {
//   base,
//   button,
//   card,
//   circularProgress,
//   checkbox,
//   chips,
//   dataTable,
//   dialog,
//   drawer,
//   fab,
//   floatingLabel,
//   iconButton,
//   layoutGrid,
//   lineRipple,
//   linearProgress,
//   list,
//   materialIcon,
//   menu,
//   notchedOutline,
//   radio,
//   select,
//   slider,
//   snackbar,
//   switchControl,
//   tabs,
//   textfield,
//   topAppBar,
// }

// import autoInit from '@material/auto-init/index'
// import * as base from '@material/base/index'
// import * as checkbox from '@material/checkbox/index'
// import * as chips from '@material/chips/index'
// import * as circularProgress from '@material/circular-progress/index'
// import * as dataTable from '@material/data-table/index'
// import * as dialog from '@material/dialog/index'
// import * as dom from '@material/dom/index'
// import * as drawer from '@material/drawer/index'
// import * as floatingLabel from '@material/floating-label/index'
// import * as formField from '@material/form-field/index'
// import * as iconButton from '@material/icon-button/index'
// import * as lineRipple from '@material/line-ripple/index'
// import * as linearProgress from '@material/linear-progress/index'
// import * as list from '@material/list/index'
// import * as menuSurface from '@material/menu-surface/index'
// import * as menu from '@material/menu/index'
// import * as notchedOutline from '@material/notched-outline/index'
// import * as radio from '@material/radio/index'
// import * as ripple from '@material/ripple/index'
// import * as select from '@material/select/index'
// import * as slider from '@material/slider/index'
// import * as snackbar from '@material/snackbar/index'
// import * as switchControl from '@material/switch/index'
// import * as tabBar from '@material/tab-bar/index'
// import * as tabIndicator from '@material/tab-indicator/index'
// import * as tabScroller from '@material/tab-scroller/index'
// import * as tab from '@material/tab/index'
// import * as textField from '@material/textfield/index'
// import * as topAppBar from '@material/top-app-bar/index'

// autoInit.register('MDCCheckbox', checkbox.MDCCheckbox)
// autoInit.register('MDCChip', chips.MDCChip)
// autoInit.register('MDCChipSet', chips.MDCChipSet)
// autoInit.register('MDCCircularProgress', circularProgress.MDCCircularProgress)
// autoInit.register('MDCDataTable', dataTable.MDCDataTable)
// autoInit.register('MDCDialog', dialog.MDCDialog)
// autoInit.register('MDCDrawer', drawer.MDCDrawer)
// autoInit.register('MDCFloatingLabel', floatingLabel.MDCFloatingLabel)
// autoInit.register('MDCFormField', formField.MDCFormField)
// autoInit.register('MDCIconButtonToggle', iconButton.MDCIconButtonToggle)
// autoInit.register('MDCLineRipple', lineRipple.MDCLineRipple)
// autoInit.register('MDCLinearProgress', linearProgress.MDCLinearProgress)
// autoInit.register('MDCList', list.MDCList)
// autoInit.register('MDCMenu', menu.MDCMenu)
// autoInit.register('MDCMenuSurface', menuSurface.MDCMenuSurface)
// autoInit.register('MDCNotchedOutline', notchedOutline.MDCNotchedOutline)
// autoInit.register('MDCRadio', radio.MDCRadio)
// autoInit.register('MDCRipple', ripple.MDCRipple)
// autoInit.register('MDCSelect', select.MDCSelect)
// autoInit.register('MDCSlider', slider.MDCSlider)
// autoInit.register('MDCSnackbar', snackbar.MDCSnackbar)
// autoInit.register('MDCSwitch', switchControl.MDCSwitch)
// autoInit.register('MDCTabBar', tabBar.MDCTabBar)
// autoInit.register('MDCTextField', textField.MDCTextField)
// autoInit.register('MDCTopAppBar', topAppBar.MDCTopAppBar)

// export const mdc = {
//   autoInit,
//   base,
//   checkbox,
//   chips,
//   circularProgress,
//   dataTable,
//   dialog,
//   dom,
//   drawer,
//   floatingLabel,
//   formField,
//   iconButton,
//   lineRipple,
//   linearProgress,
//   list,
//   menu,
//   menuSurface,
//   notchedOutline,
//   radio,
//   ripple,
//   select,
//   slider,
//   snackbar,
//   switchControl,
//   tab,
//   tabBar,
//   tabIndicator,
//   tabScroller,
//   textField,
//   topAppBar
// }
// export default {
//   install(Vue) {
//     Vue.mixin({

//     })
//   }
// }
// export default (Vue, options) => {
//   Object.defineProperty(Vue.prototype, '$mdc', {
//     get() {
//       return mdc
//     }
//   })
// } /dist/vue-material-adapter.esm.js

// import VueMaterialAdapter from 'vue-material-adapter/packages/vue-material-adapter'
// import * as base from 'vue-material-adapter/packages/base/index.js'
// import button from 'vue-material-adapter/packages/button/index.js'
// import card from 'vue-material-adapter/packages/card/index.js'
// import checkbox from 'vue-material-adapter/packages/checkbox/index.js'
// import chips from 'vue-material-adapter/packages/chips/index.js'
// import circularProgress from 'vue-material-adapter/packages/circular-progress/index.js'
// import dataTable from 'vue-material-adapter/packages/data-table/index.js'
// import dialog from 'vue-material-adapter/packages/dialog/index.js'
// import drawer from 'vue-material-adapter/packages/drawer/index.js'
// import fab from 'vue-material-adapter/packages/fab/index.js'
// import floatingLabel from 'vue-material-adapter/packages/floating-label/index.js'
// import iconButton from 'vue-material-adapter/packages/icon-button/index.js'
// import layoutGrid from 'vue-material-adapter/packages/layout-grid/index.js'
// import lineRipple from 'vue-material-adapter/packages/line-ripple/index.js'
// import linearProgress from 'vue-material-adapter/packages/linear-progress/index.js'
// import list from 'vue-material-adapter/packages/list/index.js'
// import materialIcon from 'vue-material-adapter/packages/material-icon/index.js'
// import menu from 'vue-material-adapter/packages/menu/index.js'
// import notchedOutline from 'vue-material-adapter/packages/notched-outline/index.js'
// import radio from 'vue-material-adapter/packages/radio/index.js'
// import select from 'vue-material-adapter/packages/select/index.js'
// import slider from 'vue-material-adapter/packages/slider/index.js'
// import snackbar from 'vue-material-adapter/packages/snackbar/index.js'
// import switchControl from 'vue-material-adapter/packages/switch/index.js'
// import tabs from 'vue-material-adapter/packages/tabs/index.js'
// import textfield from 'vue-material-adapter/packages/textfield/index.js'
// import topAppBar from 'vue-material-adapter/packages/top-app-bar/index.js'

// export default {
//   install(Vue) {
//     console.log(VueMaterialAdapter)
//     Vue.use(button)
//     Vue.use(card)
//     Vue.use(circularProgress)
//     Vue.use(checkbox)
//     Vue.use(chips)
//     Vue.use(dataTable)
//     Vue.use(dialog)
//     Vue.use(drawer)
//     Vue.use(fab)
//     Vue.use(floatingLabel)
//     Vue.use(iconButton)
//     Vue.use(layoutGrid)
//     Vue.use(lineRipple)
//     Vue.use(linearProgress)
//     Vue.use(list)
//     Vue.use(materialIcon)
//     Vue.use(menu)
//     Vue.use(notchedOutline)
//     Vue.use(radio)
//     Vue.use(select)
//     Vue.use(slider)
//     Vue.use(snackbar)
//     Vue.use(switchControl)
//     Vue.use(tabs)
//     Vue.use(textfield)
//     Vue.use(topAppBar)
//   }
// }
