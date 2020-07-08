// https://vuex.vuejs.org/en/actions.html

export default {
  toggleDrawer({ commit }, payload) {
    commit('TOGGLE_DRAWER', payload)
  },
  setPageTransitioning({ commit }) {
    commit('PAGE_TRANSITIONING')
  },
  setPageTransitioned({ commit }) {
    commit('PAGE_TRANSITIONED')
  }
}
