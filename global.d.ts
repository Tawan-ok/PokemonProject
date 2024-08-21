/// <reference types="vite-plugin-pwa/client" />

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    env: any
  }
}
export {}
