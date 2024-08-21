import svgr from '@svgr/rollup'
import react from '@vitejs/plugin-react-swc'
import sass from 'sass'
import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'

import pwaConfig from './pwa.config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin(), svgr(), pwaConfig],
  define: {
    'import.meta.env.VITE_BUILD_DATE': JSON.stringify(new Date().toLocaleString('th')),
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  build: {
    sourcemap: false,
    minify: true,
    cssMinify: true,
    cssCodeSplit: true,
    // chunkSizeWarningLimit: 2048,
    // rollupOptions: {
    //   output: {
    //     manualChunks(id) {
    //       if (id.indexOf('node_modules') !== -1) {
    //         return id.toString().split('node_modules/')[1].split('/')[0].toString()
    //       }
    //     },
    //   },
    // },
  },
})
