import { createApp } from 'vue'
import App from './App.vue'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import routes from './routes'
import store from './store'
import '@/assets/scss/styles.scss'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

routes.beforeEach((to: any, from: any) => {
  if (to.meta.requireAuth && !store.getters['user/isLogin']) {
    return {
      name: 'login',
    }
  }
  if (to.meta.requireAdmin) {
    return
  }
  if (to.meta.requireGuest) {
  }
})

const app = createApp(App)
app.use(PerfectScrollbar)
app.use(routes)
app.use(store)
app.mount('#app')
