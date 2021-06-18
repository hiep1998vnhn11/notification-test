import { createStore } from 'vuex'

const store = createStore({
  state: {
    items: [],
    recentItems: [],
    isShowQueuePlaylist: false,
    isProgressBusy: false,
  },
  mutations: {
    SET_STATE: function (state: any, payload: [string, any]) {
      const [key, value] = payload
      state[key] = value
      console.log(state[key])
    },
  },
})

export default store
