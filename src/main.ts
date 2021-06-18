import { createApp } from 'vue'
import App from './App.vue'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import routes from './routes'
import store from './store'
import '@/assets/scss/styles.scss'

const app = createApp(App)
app.use(PerfectScrollbar)
app.use(routes)
app.use(store)
app.mount('#app')
