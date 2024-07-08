import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // 设置为 '0.0.0.0' 可以让服务器监听所有网络接口
    host: '0.0.0.0',
    // 如果需要，你也可以指定一个端口
    port: 3000
  },
  css: {
    preprocessorOptions: {
      less: {
        // 启用 JavaScript 解析
        javascriptEnabled: true
      }
    }
  }
})
