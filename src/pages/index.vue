<template>
  <div>index page</div>
  <button class="btn btn-neutral" @click="login()">Test</button>
  <div>
    {{ items }}
  </div>
</template>
<script lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useStore } from 'vuex'
import { loginApi } from '../api'
export default {
  setup() {
    const store = useStore()
    const items = computed(() => store.state.items)
    function makeItems(item: any) {
      console.log(store.state.user)
      const newItem = [...store.state.items, item]
      store.commit('SET_STATE', ['items', newItem])
    }
    const errors = ref([])
    async function login() {
      try {
        await store.dispatch('user/login', {
          email: 'hiep@gmail.com',
          password: '123456',
        })
      } catch (err) {
        errors.value = err.response.data.errors
      }
    }
    onMounted(() => {})
    return {
      items,
      makeItems,
      login,
      errors,
    }
  },
}
</script>
<style lang="scss" scoped></style>
