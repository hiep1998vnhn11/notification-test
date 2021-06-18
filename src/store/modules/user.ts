import Cookies from 'js-cookie'

const initState = () => ({
  currentUser: {},
  token: Cookies.get('access_token') || null,
})

const getters = {
  isLogin: (state: any) => !!state.token,
}

const actions = {
  async getCurrentUser() {},
}

const mutations = {
  UPDATE_USER: function (state: any, payload: [string, any]) {
    const [key, value] = payload
    state[key] = value
  },
}

export default {
  state: initState,
  getters,
  mutations,
  actions,
  namespaced: true,
}
