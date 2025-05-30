import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/', // met hoofdletter als je repo zo heet
  plugins: [vue()]
})