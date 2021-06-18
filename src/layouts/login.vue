<template>
  <div>
    default layout
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { onMounted, ref } from 'vue'
export default {
  setup() {
    onMounted(() => {})
    return {}
  },
}
</script>
<style lang="scss" scoped></style>
