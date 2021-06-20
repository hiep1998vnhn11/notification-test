<template>
  <div>Login page</div>
  <a class="btn btn-success" @click="displayNotification">
    Register serviceworker
  </a>
  <a class="btn btn-success" @click="subscribeUser"> Test serviceworker </a>
</template>
<script lang="ts">
import { onMounted, ref } from 'vue'
export default {
  setup() {
    onMounted(() => {
      Notification.requestPermission(function (status: string) {
        if (status !== 'granted') console.log('Notification denied!')
      })
    })

    function urlBase64ToUint8Array(base64String: string) {
      const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
      const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/')
      const rawData = window.atob(base64)
      const outputArray = new Uint8Array(rawData.length)
      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i)
      }
      return outputArray
    }

    const publicVapidKey = urlBase64ToUint8Array(
      import.meta.env.VITE_PUBLIC_VAPID_KEY
    )

    async function displayNotification() {
      if (
        typeof navigator.serviceWorker === 'undefined' ||
        !navigator.serviceWorker
      )
        return
      try {
        const registerSW = await navigator.serviceWorker.register(
          '/serviceworker.js'
        )
        if (!registerSW) return
        console.log('Register serviceworker success!')
      } catch (err) {
        console.log(err)
      }
    }
    async function subscribeUser() {
      if (
        typeof navigator.serviceWorker === 'undefined' ||
        !navigator.serviceWorker
      )
        return
      try {
        const reg = await navigator.serviceWorker.ready
        const sub = await reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: publicVapidKey,
        })

        await fetch('http://localhost:8080/api/subscribe', {
          method: 'POST',
          body: JSON.stringify(sub),
          headers: {
            'Content-Type': 'application/json',
          },
        })
      } catch (err) {
        if (Notification.permission === 'denied') {
          console.warn('Permission for notifications was denied')
        } else {
          console.error('Unable to subscribe to push:', err)
        }
      }
    }
    return {
      displayNotification,
      subscribeUser,
    }
  },
}
</script>
<style lang="scss" scoped></style>
