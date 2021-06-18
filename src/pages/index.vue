<template>
  <div>index page</div>
  <button @click="login">Test</button>
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
      const newItem = [...store.state.items, item]
      store.commit('SET_STATE', ['items', newItem])
    }
    const errors = ref([])
    async function login() {
      try {
        const { data } = await loginApi({
          email: 'hiep@gmail.com',
          password: '123456',
        })
        console.log(data)
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
