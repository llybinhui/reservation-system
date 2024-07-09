import Ajax from './axios'
import { getToken } from '@/cache/local-storeage'

export const ajax = new Ajax({
  timeout: 60000,
  baseURL: import.meta.env.VITE_API_BASE_URL
})

// 请求拦截
ajax.$axios.interceptors.request.use(
  function (config) {
    // 添加登陆凭证token（只能在此设置请求头token）
    config.headers['Authorization'] = 'Bearer ' + getToken()

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 响应拦截
ajax.$axios.interceptors.response.use(
  async function (response) {
    if (response.data.code === '401') {
      // 401 未授权，跳转到登录页
      // TODO
    }

    return response
  },
  async function (error) {
    return Promise.reject(error)
  }
)
