// https://vuex.vuejs.org/en/mutations.html

export default {
  TOGGLE_DRAWER(state, payload) {
    if (payload) {
      state.drawer.show = payload
    } else {
      state.drawer.show = !state.drawer.show
    }
  },
  PAGE_TRANSITIONING(state) {
    state.page.transitioning = true
  },
  PAGE_TRANSITIONED(state) {
    state.page.transitioning = false
  }
}
