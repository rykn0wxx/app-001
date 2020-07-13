/**
 * Vue Meta
 * @library
 */
// Lib imports

export default {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          meta: {},
          metaInfo: {}
        }
      }
    })
    Vue.use(VueMeta, {
      keyName: 'metaInfo',
      refreshOnceOnNavigation: true,
      tagIDKeyName: 'vmid'
    })
  }
}
