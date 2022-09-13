import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/task-board/',
  plugins: [svelte()],
  server: {
    open: true
  }
})
