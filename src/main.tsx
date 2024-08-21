import React from 'react'

import ReactDOM from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'

import App from './App.tsx'

if (window?.env?.IS_ENABLE_PWA) {
  registerSW({
    immediate: true,
    onNeedRefresh() {
      console.log('need refresh')
    },
    onOfflineReady() {
      console.log('offline ready')
    },
  })
} else {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const registration of registrations) {
        registration.unregister()
        console.log('unregister service worker')
      }
    })
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
