// https://vuex.vuejs.org/en/getters.html

export default {
  isAuthenticated: state => !!state.user && !!state.token,
  getUser: state => state.user,
  getToken: state => state.token
}
