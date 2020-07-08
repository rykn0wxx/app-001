// https://vuex.vuejs.org/en/mutations.html

export default {
  SET_TOKEN(state, payload) {
    state.token = payload
  },
  SET_USER(state, payload) {
    state.user = payload
  }
}
