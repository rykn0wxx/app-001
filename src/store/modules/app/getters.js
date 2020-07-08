// https://vuex.vuejs.org/en/getters.html

export default {
  isDrawerShowing: state => state.drawer.show,
  isPageTransitioning: state => state.page.transitioning
}
