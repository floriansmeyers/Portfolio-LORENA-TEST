// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'


// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })
// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: tag => tag === 'Navbar' // pas aan naar jouw tagnaam
      }
    }
  })]
});
