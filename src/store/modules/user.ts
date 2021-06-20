import { AxiosResponse } from 'axios'
import Cookies from 'js-cookie'
import { loginApi } from '../../api'
import { LoginResponse } from '../../types/user.interface'
const initState = () => ({
  currentUser: {},
  token: Cookies.get('access_token') || null,
})

const getters = {
  isLogin: (state: any) => !!state.token,
}

const actions = {
  async login(
    context: { commit: any; state: any },
    user: { email: string; password: string }
  ) {
    const response = await loginApi(user)
    console.log(response)
    // const token = response.access_token
    // Cookies.set('access_token', token, {
    //   maxAge: response.expires_in,
    // })
    // context.commit('UPDATE_USER', ['token', token])
  },
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
