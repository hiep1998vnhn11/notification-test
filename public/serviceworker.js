self.addEventListener('push', (event) => {
  const title = 'Push Codelab'
  const options = {
    body: 'Yay it works.',
    icon: 'images/icon.png',
    badge: 'images/badge.png',
  }
  self.registration.showNotification(title, options)
})
