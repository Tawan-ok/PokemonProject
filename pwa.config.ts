import { VitePWA } from 'vite-plugin-pwa'

const pwaConfig = VitePWA({
  injectRegister: null,
  registerType: 'autoUpdate',
  manifest: {
    name: 'Release dashboard',
    short_name: 'Release dashboard',
    description: 'Release dashboard',
    theme_color: '#green',
    background_color: '#ffffff',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    icons: [
      {
        src: 'assets/icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'assets/icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'assets/icons/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'assets/icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'assets/icons/icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'assets/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'assets/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'assets/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    display_override: ['standalone', 'window-controls-overlay'],
    categories: ['utilities'],
    orientation: 'portrait',
    shortcuts: [
      {
        name: 'Home',
        url: '/',
      },
      {
        name: 'Example',
        url: '/example',
      },
    ],
    edge_side_panel: {
      preferred_width: 400,
    },
    handle_links: 'preferred',
  },
  workbox: {
    cleanupOutdatedCaches: false,
  },
  devOptions: {
    enabled: true,
  },
})

export default pwaConfig
