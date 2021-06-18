import { createStore } from 'vuex'
import user from './modules/user'

const store = createStore({
  state: () => ({
    items: [],
    recentItems: [],
    isShowQueuePlaylist: false,
    isProgressBusy: false,
  }),
  mutations: {
    SET_STATE: function (state: any, payload: [string, any]) {
      const [key, value] = payload
      state[key] = value
    },
  },

  modules: {
    user,
  },
})

export default store
