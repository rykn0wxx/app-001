// https://vuex.vuejs.org/en/actions.html

export default {
  setToken({ commit }, payload) {
    commit('SET_TOKEN', payload)
  },
  setUser({ commit }, payload) {
    commit('SET_USER', payload)
  }
}
